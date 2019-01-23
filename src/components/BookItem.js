/*
 * Created by pan 2018-12-17
 */
import React from 'react';
import '../assets/scss/bookItem.scss';

const BookItem = props => {
    const cover = Object.keys(props.data).includes('cover')
        ? props.data.cover.includes('/agent/')
            ? decodeURIComponent(props.data.cover).replace(/\/agent\//, '')
            : props.data.cover
        : '';
    return (
        <div className="book-item" align="start">
            <div className="avatar">
                <img src={cover || props.data.icon} alt={props.data.title} />
            </div>
            <div className="detail">
                <h3>{props.data.title}</h3>
                <p className="info">
                    <span>作者：{props.data.author}</span>
                    <span>类型：{props.data.cate || props.data.majorCate}</span>
                    <span>状态：{props.data.status}</span>
                </p>
                <p className="des">
                    简介：{props.data.des || props.data.shortIntro}
                </p>
            </div>
        </div>
    );
};

export default BookItem;
