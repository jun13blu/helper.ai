import React from 'react'
import { Layout, List, Icon, Avatar } from 'antd'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    const { users } = this.props
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <h2>Users</h2>
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon="user" />}
                title={<Link to={`/users/${item.link}`}>{item.name}</Link>}
                description={`Submitted ${item.complaints} complaints since ${
                  item.time
                }`}
              />
              <div>
                {item.rating} <Icon type="star" />
              </div>
            </List.Item>
          )}
        />
      </Layout.Content>
    )
  }
}
