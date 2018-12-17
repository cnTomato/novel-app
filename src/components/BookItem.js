/*
 * Created by pan 2018-12-17
 */
import React from "react";
import { Flex } from "antd-mobile";
import "../assets/scss/bookItem.scss";

const BookItem = (props) => {
    const cover = Object.keys(props.data).includes("cover") ? props.data.cover.includes("/agent/") ? decodeURIComponent(props.data.cover).replace(/\/agent\//, "") : props.data.cover : "";
    return <Flex className="book-item" align="start">
        <Flex.Item className="avatar">
            <img src={cover || props.data.icon}
                 alt={props.data.title}/>
        </Flex.Item>
        <Flex.Item className="detail">
            <h3>{props.data.title}</h3>
            <p className="info">
                <span>作者：{props.data.author}</span><span>类型：{props.data.cate || props.data.majorCate}</span><span>状态：{props.data.status}</span>
            </p>
            <p className="des">简介：{props.data.des || props.data.shortIntro}</p>
        </Flex.Item>
    </Flex>;
};

export default BookItem;
