//window.$ = window.jQuery = require('jquery');
(function($) {
	"use strict";
	//TODO:
	//Test auto tab on iOS and Android

	// Lifted from here: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return false;
	}

	function setCookie(cname, cvalue, exhours) {
		var d = new Date();
		if (exhours) {
		    d.setTime(d.getTime() + (exhours*60*60*1000));
		} else {
			d.setTime(new Date('January 1, 2038 00:00:00')); //far future date
		}
		var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
	}

	function setCountryList() {
		return $.ajax({
			url: "https://api.b-fonline.com/api/countries",
			dataType: "json",
			type : "GET",
			success : function(r) {
				var html = "";
				var country = $('select[name=agegate-country]');
				var default_iso = hasAttr(country.attr('data-default-iso')) && country.attr('data-default-iso') !== "" ? country.attr('data-default-iso') : "US";
				default_iso = default_iso.toUpperCase();
				$.each(r, function(key, value){
					if(value.iso2_code.toUpperCase() == default_iso){
						html += "<option value='"+value.iso2_code.toUpperCase()+"' selected='selected'>"+value.name+"</option>\n";
					} else{
						html += "<option value='"+value.iso2_code.toUpperCase()+"'>"+value.name+"</option>\n";
					}
				});
				country.html(html);
			}
		});
	}

	function checkForCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return true;
    }
    return false;
	}

	function setMaxYear(){
		var maxYear = new Date().getFullYear();
		$('input[name=agegate-year]').attr('max', maxYear);
	}

	function keycodeIsDigit(keyCode){
		return ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105));
	}

	function bday_focusNext(elem) {
		var found_me = false;
		var focused = false;
		elem.closest('fieldset').find('input[type=number]').each(function(index, element){
			if(found_me) {
				$(this).focus();
				focused = true;
				return false;
			}

			if($(this)[0] == elem[0]) {
				found_me = true;
			}
		});

		if(!focused) {
			//last element
			$('select[name=agegate-country]').focus();
		}
	}

	function userInputCheck(elem, keyCode, maxSingle, maxLength){
		if(keycodeIsDigit(keyCode)) {
			var val = elem.val();
			if( ( maxSingle && val > maxSingle ) || val.length === maxLength ) {
				bday_focusNext(elem);
			}
		}
	}

	function hasAttr(attr) {
		return typeof attr !== typeof undefined && attr !== false;
	}

	function setAutoTabbing(){
		let ag = $('[name=agegate]');
		if(hasAttr(ag.attr('data-auto-tab')) && (ag.attr('data-auto-tab') == "true" || ag.attr('data-auto-tab') == "data-auto-tab") ) {
			var timer = 0;
			var timeoutval = 100;
			$('[name=agegate-month]').keyup(function(e){
				if (timer) {
					clearTimeout(timer);
				}

				var elem = $(this);
				timer = setTimeout(function(){userInputCheck(elem, e.which, 1, 2 );}, timeoutval);
			});
			$('[name=agegate-day]').keyup(function(e){
				if (timer) {
					clearTimeout(timer);
				}
				var elem = $(this);
				timer = setTimeout(function(){userInputCheck(elem, e.which, 3, 2 );}, timeoutval);
			});
			$('[name=agegate-year]').keyup(function(e){
				if (timer) {
					clearTimeout(timer);
				}
				var elem = $(this);
				timer = setTimeout(function(){userInputCheck(elem, e.which, null, 4 );}, timeoutval);
			});
		}
	}

	function bf_country_change() {
		$('select[name=agegate-country]').on('change', function(){
			let mdy_list = {
				"country_iso_2": ["AS", "GU", "KR", "MH", "MP", "UM", "VI", "FM", "US", "BS", "GL", "KE", "PK", "PA", "PH", "PR", "SO", "TG"],
				"country_iso_3": ["ASM", "GUM", "KOR", "MHL", "MNP", "UMI", "VIR", "FSM", "USA", "BHS", "GRL", "KEN", "PAK", "PAN", "PHL", "PRI", "SOM", "TGO"]
			};

			//change lda fields
			let val = $(this).val();

			let key = val.length == 3 ? "country_iso_3" : "country_iso_2";

			let old_bday = (mdy_list[key].indexOf(val) > 0) ? $('[name="agegate-ddmmyyyy"]') : $('[name="agegate-mmddyyyy"]');
			let new_bday = (mdy_list[key].indexOf(val) > 0) ? $('[name="agegate-mmddyyyy"]') : $('[name="agegate-ddmmyyyy"]');

			if(old_bday.is(':disabled')){
				return;
			}

			new_bday.prop('disabled', false);
			old_bday.prop('disabled', 'disabled');

			old_bday.find('[type=number]').each(function(){
				if($(this).val() != "") {
					let ename = $(this).attr('name');
					new_bday.find(`[name='${ename}']`).first().val($(this).val());
				}
			});

		});
	}

	function setCountryBehaviors() {
		$.when(setCountryList()).then(function(){
			if($('.agegate-fieldset').length > 1) {
				bf_country_change();
				$('select[name=agegate-country]').change();
			}
		});
	}

	function showAgegate(){
		setAutoTabbing();
		setCountryBehaviors();
		setMaxYear();
		$('div#agegate-outer').css('display', 'block');
		$('div#body-outer').css('display', 'none');
		$('html').addClass('agegate');
	}

	function hideAgegate(){
		$('form[name=agegate]').attr('disabled', 'disabled');
		$('div#agegate-outer').css('display', 'none');
		$('div#body-outer').css('display', 'block');
		$('html').removeClass('agegate');
		if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
		} else {
			var h = window.location.hash.split('#')[1];
		    var top = $('[name='+h+']').offset().top;
		    window.scrollTo(0, top);                        //Go there directly or some transition
		}
	}

	function lockoutUnderage(){
		setCookie('lda', 0, 1);
	}

	function redirectUnderage(message){
		var el = $('div#agegate-outer div.agegate-container');
		el.html("<div class='agegate-lockout'><p>"+message+"</p><p>Redirecting in <span id='countdown'>10</span> seconds.</p></div>");
		var count = 10;
		var countdown = setInterval(function(){
			$('span#countdown').html(count);
			if(count === 0){
				clearInterval(countdown);
				window.location.href = 'http://responsibility.org/';
			}
			count--;
		}, 1000);
	}

	function doAgeGate(){
		//Clear out the error message
		$('div#agegate-errors').html('');

		var month = Math.abs($('input[name=agegate-month]:enabled').val());
		var day = Math.abs($('input[name=agegate-day]:enabled').val());
		var year = Math.abs($('input[name=agegate-year]:enabled').val());
		var country = $('select[name=agegate-country]').val();
		var category = $('input[name=agegate-category]').val();
		var remember = $('input[name=agegate-remember]').is(":checked");
		var birth_date = year+'-'+month+'-'+day;

		$.ajax({
			url: "https://api.b-fonline.com/api/validate_lda",
			method: "POST",
			data: JSON.stringify({
				birth_date: birth_date,
				country: country,
				category: category
			}),
			contentType: 'application/json',
			dataType: 'json',
			success: function(data){
				if(data){
					if(remember){
						setCookie('lda', 1);
						hideAgegate();
						return;
					}
					else{
						setCookie('lda', 1, 2);
						hideAgegate();
						return;
					}
				}
				else{
					lockoutUnderage();
					redirectUnderage('Sorry you are not of legal drinking age.');
				}
			},
			error: function(data){
				if(data.status == 400){
					$('div#agegate-errors').html('Error, please try again.');
				}
			}
		});
	}

	function isBot() {
		//https://support.google.com/webmasters/answer/1061943
		//https://udger.com/resources/ua-list/crawlers?c=1
		var ua = navigator.userAgent.toLowerCase();
		var welcome_bots = [
			'adsbot-google'
			, 'baiduspider'
			, 'bingbot'
			, 'bingpreview'
			, 'facebot'
			, 'facebookexternalhit'
			//, 'google'
			, 'googlebot'
			, 'msnbot'
			, 'slurp'
			, 'yahoo'
			, 'yandex'
		];

		var isbot = false;

		for(var i = 0; i < welcome_bots.length; i++) {
			if (ua.indexOf(welcome_bots[i]) > 0) {
				isbot = true;
				break;
			}
		}

		return isbot;
	}

	function getExcludedJson(){
		//Use an external JSON file
		return $.getJSON("/js/exclude.json");

		//OR
		//Set JSON in Code
		/*
		return {
			"paths": [
				"privacy",
				"privacy-policy"
			]
		}
		*/
	}

	function trustEqualsYes() {
		return getParameterByName('trust') && getParameterByName('trust').toLowerCase() == 'yes';
	}

	$('form[name=agegate]').submit(function(e){
		e.preventDefault();
		document.activeElement.blur(); //closes keyboard on safari
		doAgeGate();
	});

	//Check to see if the cookie is set
	if(checkForCookie('lda')){
		//Cookie is set
		if(getCookie('lda') == '1'){
			//Valid LDA
			$('form[name=agegate]').attr('disabled', 'disabled');
			return;
		} else {
			//Invalid LDA redirect to responsibility.org
			showAgegate();
			redirectUnderage('Sorry you are not of legal drinking age.');
			return;
		}
	} else {
		//lda cookie is not set, check for trust=yes
		$.when(getExcludedJson()).then(function(json){
			var url = window.location.pathname;
			var found = false;
			for(var i = 0; i < json["paths"].length; i++) {
				if (url.indexOf(json["paths"][i]) > 0) {
					found = true;
					break;
				}
			}
			if(!found) {
				if( trustEqualsYes() || isBot()){
					setCookie('lda', '1', 1);
					$('form[name=agegate]').attr('disabled', 'disabled');
					return;
				} else {
					showAgegate();
				}
			}
		}).fail(function(err){
			showAgegate();
		});
	}
})(jQuery);
