import React, {Component} from 'react';
import {Row, Col, Input} from 'antd';
const Search = Input.Search;

class Index extends Component {
    render() {
        return (
            <div className="index">
                <h1>拒绝广告-搜小说</h1>
                <Row gutter={16} justify="center">
                    <Col>
                        <Search/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Index;
