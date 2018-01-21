import React from 'react'
import { Layout, List, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'

const data = {
  progress: [
    {
      title: 'Gas leakage',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Traffic jam',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Broken clock',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Faulty display',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Gas leakage',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Traffic jam',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Broken clock',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    },
    {
      title: 'Faulty display',
      location: 'Sunway',
      worker: 'John',
      rating: 5,
      expected: '31 Dec',
      time: '2 mins ago',
      link: '1'
    }
  ],
  completed: [
    {
      title: 'Gas leakage',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Traffic jam',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Broken clock',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Faulty display',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Gas leakage',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Traffic jam',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Broken clock',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    },
    {
      title: 'Faulty display',
      location: 'Sunway',
      worker: 'John',
      completed: '3 days ago',
      rating: 4,
      time: '2 mins',
      link: '2'
    }
  ]
}

export default class ComplaintList extends React.Component {
  state = { key: 'progress' }

  handleClick = ({ key }) => this.setState({ key })

  render() {
    const { key } = this.state
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <h2>Complaints</h2>
        {/* <Card> */}
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
            dataSource={data.progress}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="small" icon="exclamation-circle" />}
                  title={
                    <Link to={`/complaints/${item.link}`}>{item.title}</Link>
                  }
                  description={`To be handled before ${item.expected} by ${
                    item.worker
                  }`}
                />
                <div>
                  {item.location}, {item.time}
                </div>
              </List.Item>
            )}
          />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={data.completed}
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
                  description={`Completed by ${item.worker} on ${
                    item.completed
                  }`}
                />
                <div>
                  {item.location}, {item.time}
                </div>
              </List.Item>
            )}
          />
        )}
        {/* </Card> */}
      </Layout.Content>
    )
  }
}
