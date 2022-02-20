import React from 'react'
import c from "./Main.module.scss";
const classNames = require("classnames/bind");
const cx = classNames.bind(c);

export const Main = () => {

    return (
        <div className={c.main}>
            <h1 className={c.title}> Welcome to Rick and Morty site</h1>
        </div>
    )
}
