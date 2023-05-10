import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const app = React.createElement('h1', null, 'hello world')

root.render(app)