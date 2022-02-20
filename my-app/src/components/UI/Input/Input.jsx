import React, { useEffect, useState, useRef, forwardRef } from "react";
import c from "./Input.module.scss";
const classNames = require("classnames/bind");
const cx = classNames.bind(c);

export const Input =React.forwardRef(({
    value,
    onChange,
    label,
    placeholder,
    className,
    type,
  }, ref) => {
    let classNameCX = cx({
        "input": true,
        [className]: !!className
      });
  return (
                <>
                    <input autoComplete={"off"} value={value}  onChange={(e)=>onChange(e.target.value)}  ref={ref}  type={type} className={classNameCX} placeholder={placeholder} /> 
                    <label htmlFor="id">{label}</label>
                </>
    );
});
