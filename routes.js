import React, {Component} from 'react'
import {Route} from 'react-router'
import indexCon from './containers/indexCon'


export class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.children)
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

function lazyLoadComponent(lazyModule) {
    return (location, cb) => {
        lazyModule(module => cb(null, module.default));
    }
}

export default (
    <Route path="/" component={App}>
        <Route path="index" getComponent={lazyLoadComponent(indexCon)}/>
    </Route>
)
