import React from 'react'
import {render} from 'react-dom'
import Layouts from './components/Layout'
import 'antd/dist/antd.css'
import "./assets/css/style.min.css"

class App extends React.Component {
    render() {
        return (
            <Layouts />
        )
    }
}
render(<App/>, document.getElementById('root'))