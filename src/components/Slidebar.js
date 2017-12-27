import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout;

class Sliderbar extends React.Component {
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                <Menu.Item key="1" >
                        <Icon type="phone" />
                        <span className="nav-text">  Điện Thoại </span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="laptop" />
                    <span className="nav-text">LapTop</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">MacBook</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">Phụ Kiên điện tử</span>
                </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
export default Sliderbar;