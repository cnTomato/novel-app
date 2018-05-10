import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import "../assets/styles/loadingCom.css"

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "spin",
            color: "rgb(10,91,255)"
        }
    }


    render() {
        return (
            <div className="loading-com">
                <ReactLoading type={this.state.type} color={this.state.color} width={64} height={64}/>
            </div>
        );
    }
}

export default Loading;
