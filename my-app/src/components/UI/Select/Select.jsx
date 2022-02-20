import React, { useState, useEffect, useRef } from "react";
import { ArrowDown } from "../../svg/svg";
import c from "./Select.module.scss";
const classNames = require("classnames/bind");
const cx = classNames.bind(c);

export const Select =({ options, selectedOption, setSelectedOption , className},) => { 
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked =  (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  const optionsJsx=options.map((option)=><div key={option} className={c.option} onClick={()=>onOptionClicked(option)}>{option} </div>)
        return(
          <div className={cx({selectContainer:true,[className]:className,})}>
              <div className={c.select} onClick={()=> toggling()}>{selectedOption}<ArrowDown/> </div>
              {isOpen && <div className={c.optionsList}>{optionsJsx}</div>}
          </div>
          )
};
