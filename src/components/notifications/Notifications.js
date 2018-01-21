import React from 'react'
import { Layout, List, Avatar, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default class Notifications extends React.Component {
  handleDelete = index => this.props.handleDelete(index)

  render() {
    const { notifications } = this.props
    return (
      <div>
        <h2>Notifications</h2>
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={item => (
            <List.Item
              actions={[
                <a onClick={() => this.handleDelete(item.index)}>
                  <Icon type="close" />
                </a>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} />}
                title={<Link to={item.link}>{item.title}</Link>}
                description={item.description}
              />
              <div>{item.time}</div>
            </List.Item>
          )}
        />
      </div>
    )
  }
}
