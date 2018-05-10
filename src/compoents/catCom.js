/*
* Created by pan$ 2018/4/25$
*
*/
import React, {Component} from 'react';
import "../assets/styles/cat.css"

class Cat extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        const {data} = this.props;
        return (
            <div className="page cat">
                <CatItem data={data.male} title="男生"/>
                <CatItem data={data.female} title="女生"/>
                <CatItem data={data.picture} title="漫画"/>
                <CatItem data={data.press} title="传记"/>
            </div>
        );
    }
}

class CatItem extends Cat {
    constructor(props) {
        super(props)
    }

    render() {
        const {data, title} = this.props;
        return (
            <div className="cat-items">
                <div className="title"><h2>{title}</h2></div>
                <div className="cat-item">
                    {
                        data.map((v, k) => {
                            return <div key={k} className="cat-item-content">
                                <p>{v.name}</p>
                                <p>{v.bookCount + "本"}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Cat;
