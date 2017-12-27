import React from 'react'
import Headers from './Header'
import Footers from './Footers'
import Sliderbar from './Slidebar'
import { Layout, Breadcrumb  } from 'antd'
const { Sider, Content } = Layout;

class Layouts extends React.Component {
    render() {
        return (
            <Layout>
                <Headers />
                <Layout>
                    <Sliderbar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        Content

                        </Content>
                    </Layout>
                    <Sider width={400} style={{ background: '#fff' }}>
                        
                    </Sider>
                </Layout>
                <Footers />
            </Layout>
        )
    }
}
export default Layouts;