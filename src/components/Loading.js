/*
 * Created by pan 2018-12-12
 */
import React from 'react';
import { ActivityIndicator } from 'antd-mobile';
import '../assets/scss/loading.scss';

class Loading extends React.Component {
    render() {
        return (
            <div className="loading">
                <ActivityIndicator text="加载中..." />
            </div>
        );
    }
}

export default Loading;
