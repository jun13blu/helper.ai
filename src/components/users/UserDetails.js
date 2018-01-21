import React from 'react'
import { Layout, List, Avatar, Icon, Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const data = {
  '1': {
    name: 'Jessica Jones',
    username: 'jessica09',
    joined: '06 May, 2014',
    complaints: 3,
    rating: 4,
    gender: 'female',
    status: 'single',
    birth: '08 April, 1990',
    chat: [
      {
        name: 'Jack',
        content: 'This user submit a lot of useful requests.'
      },
      { name: 'Jill', content: 'Seems to be a trustworthy user.' }
    ]
  },
  '2': {},
  '3': {}
}

export default class Sidebar extends React.Component {
  render() {
    const {
      name,
      username,
      joined,
      complaints,
      rating,
      gender,
      status,
      birth,
      chat
    } = data[this.props.match.params.user]
    return (
      <div>
        <h2>
          <Link to="/users">
            <Icon type="arrow-left" /> Users
          </Link>
        </h2>
        <Card title={name}>
          <Row gutter={16}>
            <Col span={18}>
              <p>Username: {username}</p>
              <p>Gender: {gender}</p>
              <p>Status: {status}</p>
              <p>Date of birth: {birth}</p>
              <p>Date joined: {joined}</p>
              <p>Complaints submitted: {complaints}</p>
              <p>Rating: {rating}</p>
            </Col>
            <Col span={6}>
              <img
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="mockup"
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
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
