import '../../scss/components/accordion/accordion.scss'

import { useState } from 'react';

const Accordion = ({ button, text }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="box_accordion">
      <button
        type="button"
        className={`btn_accordion ${isOpened ? 'is_open_accordion' : ''}`}
        onClick={() => {
          setIsOpened((state) => !state);
        }}
      >
        {button}
      </button>
      <div className="item_accordion">
        <div className="inner_accordion">
          {text}
        </div>
      </div>
    </div>
  )
};

export default Accordion;