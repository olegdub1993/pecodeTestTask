import React from 'react';
import c from "./Button.module.scss";
const classNames = require("classnames/bind");
const cx = classNames.bind(c);

export const Button = ({className, onClickHandle, children, disabled}) => {
  let classNameCX = cx({
    "button": true,
    [className]: !!className
  });
  const onClick=(e)=>{
    e.preventDefault()
    onClickHandle(e)
  }
  return (
    <button onClick={(e)=>onClick(e)}  disabled={disabled} className={classNameCX}>
       <div>{children}</div> 
    </button>
  )
}

