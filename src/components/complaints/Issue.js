import React from 'react'
import { List, Avatar, Icon, Card, Divider } from 'antd'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    const { complaints, match } = this.props
    console.log(complaints)
    const {
      title,
      description,
      chat,
      date,
      worker,
      user,
      submitted,
      completed
    } = complaints.find(complaint => complaint.link === match.params.issue)
    return (
      <div>
        <h2>
          <Link to="/complaints">
            <Icon type="arrow-left" /> Complaints
          </Link>
        </h2>
        <Card>
          <Card.Meta
            avatar={<Avatar icon="user" />}
            title={title}
            description={
              <p>
                Submitted by {user} on {submitted}.<br />
                {completed
                  ? `Closed on ${date}, handled by ${worker}`
                  : `To be handled before ${date} by ${worker}`}
              </p>
            }
          />
          <Divider />
          <p>{description}</p>
        </Card>
        <List
          itemLayout="vertical"
          dataSource={chat}
          renderItem={item => (
            <List.Item>
              <div style={{ margin: '8px 0' }}>
                <Avatar
                  size="small"
                  icon="user"
                  style={{ verticalAlign: 'middle' }}
                />{' '}
                <h3 style={{ verticalAlign: 'middle', display: 'inline' }}>
                  {item.name}
                </h3>
              </div>
              {item.content}
            </List.Item>
          )}
          style={{ margin: '16px 32px' }}
        />
      </div>
    )
  }
}
