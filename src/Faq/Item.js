import React, { useState } from 'react';

export const Item = (props) => {
  const { text } = props;
  const [itemClosed, setItemClosed] = useState(true);
  const handleToggle = () => {
    itemClosed ? setItemClosed(false) : setItemClosed(true);
  };
  const itemClasses = itemClosed
    ? 'l-faq-p-container h-nav h-is__closed'
    : 'l-faq-p-container h-nav';

  const arrClasses = itemClosed ? 'c-faq-arrow' : 'c-faq-arrow h-is__up';

  return (
    <div className="l-faq-flex-item l-faq-flex-seven-container -f-myriad-cond u-golden">
      <button
        onClick={() => handleToggle()}
        className="l-faq-btn c-faq-btn js-faq-btn -f-myriad-cond u-golden"
      >
        {text}
        <img src="/images/arrow_golden.png" alt="" className={arrClasses} />
      </button>
      <div className={itemClasses}>
        <p className="l-faq-p c-faq-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          eligendi doloremque alias, tempora exercitationem eaque illum ipsa cum
          accusantium, aliquam temporibus modi iste fugit officiis sequi
          similique natus minima enim a sint porro? Ad beatae eos ipsam
          architecto vitae laudantium ut a ducimus cum itaque facilis, numquam
          fugit at corrupti.
        </p>
      </div>
    </div>
  );
};
