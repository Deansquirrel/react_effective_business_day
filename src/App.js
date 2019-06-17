import React, {Component} from 'react';
import { LocaleProvider } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import "antd/dist/antd.css";
import "./App.css"

export default App;

function App(){
    return (
        <LocaleProvider locale={zhCN}>
            <div className={"rootContainer"}>
                <T />
            </div>
        </LocaleProvider>
)
}


class T extends Component {
    render(){
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}