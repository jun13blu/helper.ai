import React from 'react'
import { List, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'

export default class ComplaintList extends React.Component {
  state = { key: 'progress' }

  handleClick = ({ key }) => this.setState({ key })

  render() {
    const { complaints } = this.props
    const { key } = this.state
    return (
      <div>
        <h2>Complaints</h2>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[key]}
          mode="horizontal"
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        >
          <Menu.Item key="progress">In Progress</Menu.Item>
          <Menu.Item key="completed">Completed</Menu.Item>
        </Menu>
        {key === 'progress' ? (
          <List
            itemLayout="horizontal"
            dataSource={complaints.filter(complaint => !complaint.completed)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="small" icon="exclamation-circle" />}
                  title={
                    <Link to={`/complaints/${item.link}`}>{item.title}</Link>
                  }
                  description={`To be handled before ${item.date} by ${
                    item.worker
                  }`}
                />
                <div>
                  {item.location}, {item.submitted}
                </div>
              </List.Item>
            )}
          />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={complaints.filter(complaint => complaint.completed)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      size="small"
                      icon="check-circle"
                      style={{ backgroundColor: 'green' }}
                    />
                  }
                  title={
                    <Link to={`/complaints/${item.link}`}>{item.title}</Link>
                  }
                  description={`Completed by ${item.worker} on ${item.date}`}
                />
                <div>
                  {item.location}, {item.submitted}
                </div>
              </List.Item>
            )}
          />
        )}
      </div>
    )
  }
}
