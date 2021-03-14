import React, { useState } from 'react';

export const Item = (props) => {
  const { question, answer } = props;
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
        {question}
        <img src="/images/arrow_golden.png" alt="" className={arrClasses} />
      </button>
      <div className={itemClasses}>
        <p className="l-faq-p c-faq-p">{answer}</p>
      </div>
    </div>
  );
};
