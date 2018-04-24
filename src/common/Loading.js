import React, {Component} from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "spin"
        }
    }


    render() {
        return (
            <div className="loading-com" style={{width: 100 + "vw", height: 100 + "vh"}}>
                <ReactLoading type={this.state.type}/>
            </div>
        );
    }
}

export default Loading;
