import React  from 'react';
import ReactDOM from 'react-dom';
import c from "./ModalContainer.module.scss"
const classNames = require("classnames/bind");
const cx = classNames.bind(c);

export const ModalContainer = ({isShowing, children,}) => {
    return (isShowing ? ReactDOM.createPortal(
                <div className={c.overlay}>
                    <div className={c.container} >
                            {children}
                    </div>
                </div>, document.body):null
    )
     }