import React from 'react'
import { Layout, Menu, Avatar } from 'antd'
import { withRouter } from 'react-router-dom'
import Item from './Item'

class Sidebar extends React.Component {
  render() {
    const { collapsed, handleCollapse, location } = this.props
    const key = location.pathname.split('/')[1] || 'dashboard'
    console.log(key)
    return (
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }}
      >
        <Avatar icon="user" style={{ margin: '16px 24px 6px 24px' }} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[key]}
          onClick={this.handleClick}
        >
          <Item key="dashboard" icon="dashboard" description="Dashboard" />
          <Item key="notifications" icon="bell" description="Notifications" />
          <Item key="complaints" icon="exception" description="Complaints" />
          <Item key="users" icon="user" description="Users" />
          <Item key="statistics" icon="line-chart" description="Statistics" />
        </Menu>
      </Layout.Sider>
    )
  }
}

export default withRouter(Sidebar)
