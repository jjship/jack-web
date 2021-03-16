import React, { Component } from 'react';

import Slider from 'react-slick';

import zaslepka from './zaslepka_slide.png';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
          <div>
            <img src={zaslepka} alt="film" className="l-a-sliderEl" />
          </div>
        </Slider>
      </div>
    );
  }
}
