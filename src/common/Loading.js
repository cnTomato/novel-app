import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import "../assets/styles/loadingCom.css"

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "bars",
            color: "rgb(0,209,178)"
        }
    }


    render() {
        return (
            <div className="loading-com">
                <ReactLoading type={this.state.type} color={this.state.color} width={32} height={32}/>
            </div>
        );
    }
}

export default Loading;
