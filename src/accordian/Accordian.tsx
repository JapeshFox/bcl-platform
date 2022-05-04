import React from 'react';
import logo from '../images/arrow-down.svg';

export default function Accordian() {
  return (
    <div className="accordion">
      <div className="accordionItem collapsed bg-white border border-gray-200">
        <h2 className="accordionHeader mb-0" id="headingOne">
          <button
            className="
        accordionButton
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
            <img src={logo} />
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordionCollapse"
          aria-labelledby="headingOne"
        >
          <div className="accordionBody py-4 px-5">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
}
