import React from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout;

class Headers extends React.Component {
    render() {
        return (
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">menu1</Menu.Item>
                    <Menu.Item key="3">menu2</Menu.Item>
                </Menu>
            </Header>
        );
    }
}
export default Headers;