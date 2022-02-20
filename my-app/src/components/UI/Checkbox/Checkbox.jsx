import React from "react";
import c from "./Checkbox.module.scss";
var classNames = require("classnames/bind");
var cx = classNames.bind(c);

export const Checkbox =React.forwardRef( ({
    checked,
    onChange,
    label,
    placeholder,
    className,
    labelClassName,
    id
  }, ref) => {
    let classNameCX = cx({
        "checkbox": true,
        [className]: !!className
      });
        return (
                      <>
                          <input  ref={ref} id={id} className={classNameCX} placeholder={placeholder} onChange={onChange} checked={checked}  type='checkbox'/> 
                          <label className={labelClassName} htmlFor={id}>{label}</label>
                      </>
          );
});
