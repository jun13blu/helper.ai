import React from 'react'
import { Layout, List, Icon, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const data = [
  {
    name: 'Jane',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'John',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'Jack',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'Jill',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'Jacob',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'Jessie',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'Jeckie',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  },
  {
    name: 'Johnnie',
    time: '13 April 2017',
    complaints: 7,
    rating: 4,
    link: '1'
  }
]

export default class Sidebar extends React.Component {
  render() {
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <h2>Users</h2>
        <List
          itemLayout="horizontal"
          dataSource={data}
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
