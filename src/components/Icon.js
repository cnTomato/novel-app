/*
 * Created by pan 2018-12-04
 */
import React from "react";
import "../assets/scss/icon.scss";

export default (prop) => {
    return <i className={"icon icon-" + prop.name}></i>;
}
