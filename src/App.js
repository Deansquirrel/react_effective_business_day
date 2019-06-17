import React, {Component} from 'react';
import { LocaleProvider } from 'antd';
import { Menu,Icon } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import "antd/dist/antd.css";
import "./App.css"

export default App;

function App(){
    return (
        <LocaleProvider locale={zhCN}>
            <div>
                <DivSide />
            </div>
        </LocaleProvider>
)
}


// class T extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>Test</h1>
//             </div>
//         )
//     }
// }

class DivSide extends Component {

    render() {

        const MenuItem = ({key,icon,title}) =>
            <div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key={key}>
                        <Icon type={icon} />
                        <span>{title}</span>
                    </Menu.Item>
                </Menu>
            </div>;

        return (
            <div>
                <div className={"logo"} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <MenuItem key={"1"} icon={"user"} title={"nav t"} />
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}