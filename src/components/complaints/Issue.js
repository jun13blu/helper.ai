import React from 'react'
import { Layout, List, Avatar, Icon, Card, Divider } from 'antd'
import { Link } from 'react-router-dom'

const data = {
  '1': {
    title: 'Gas Leakage',
    user: 'Jessica',
    submitted: '29 Dec, 2017',
    date: '31 Dec, 2017',
    worker: 'John',
    completed: false,
    description:
      'Pipe at Sunway appears to be broken and might cause accident, please deal with it ASAP.',
    chat: [
      {
        name: 'Dan',
        content: 'I am assigning this issue to John.'
      },
      { name: 'John', content: 'Dealing with it now.' }
    ]
  },
  '2': {
    title: 'Broken clock',
    user: 'Jeckie',
    submitted: '27 Dec, 2017',
    date: '30 Dec, 2017',
    worker: 'James',
    completed: true,
    description: 'The clock at lobby seems to be faulty.',
    chat: [
      {
        name: 'Jessie',
        content: 'James, can you please fix the clock.'
      },
      { name: 'James', content: 'Alright.' },
      { name: 'James', content: 'Done fixing it.' }
    ]
  },
  '3': {}
}

export default class Sidebar extends React.Component {
  render() {
    const {
      title,
      description,
      chat,
      date,
      worker,
      user,
      submitted,
      completed
    } = data[this.props.match.params.issue]
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <Link to="/complaints">
          <h2>
            <Icon type="arrow-left" /> Back to complaints
          </h2>
        </Link>
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
      </Layout.Content>
    )
  }
}
