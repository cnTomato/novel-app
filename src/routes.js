import React, {Component} from 'react'
import {Route} from 'react-router'
import CatCon from 'bundle-loader?lazy!./containers/catCon'

export class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
        <Route path="cat" getComponent={lazyLoadComponent(CatCon)}/>
    </Route>
)
