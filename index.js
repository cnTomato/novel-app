import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Hello World</h1>
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('app'));