/*
* Created by pan 2018/4/28
*
*/
import React, {Component} from 'react';
import {LazyImage} from "react-lazy-images";
import "../assets/styles/sort.css"

class Sort extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        const {data} = this.props;
        return (
            <div className="page sort">
                {
                    data.map((v, k) => {
                        let cover = decodeURIComponent(v.cover);
                        return <div key={k} className="items">
                            <div className="item-img">
                                <LazyImage
                                    src={cover.replace(/\/agent\//g, "")}
                                    alt={v.title}
                                    placeholder={({alt}) => (
                                        <img src="http://temp.im/754x754" alt={alt}/>
                                    )}
                                    actual={({src, alt, srcSet}) => <img src={src} alt={alt}/>}
                                />
                            </div>
                            <div className="item-content">
                                <h5 className="title">{v.title}</h5>
                                <p className="author">{"作者：" + v.author}</p>
                                <p className="major">{"类型：" + v.minorCate}</p>
                                <p className="rentation">{"留存率：" + v.retentionRatio + "%"}</p>
                                <p className="shortIntro">{"简介：" + v.shortIntro}</p>
                            </div>
                        </div>
                    })
                }
            </div>

        );
    }
}


export default Sort;
