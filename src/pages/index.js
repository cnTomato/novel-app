import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Index from '../components/index'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    )
}

render(Index)

if (module.hot) {
    module.hot.accept('../components/index', () => {
        render(Index)
    })
}