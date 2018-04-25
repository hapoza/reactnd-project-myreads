import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import registerServiceWorker from './register-service-worker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
