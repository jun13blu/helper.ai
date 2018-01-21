import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from './sidebar'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { complaints } from './data.json'

const notifications = [
  {
    title: 'New complaint',
    description: 'A new complaint is submitted.',
    icon: 'message',
    time: '2 mins ago',
    link: '/complaints/1'
  },
  {
    title: 'Complaint resolved',
    description: 'A complaint is successfully resolved.',
    icon: 'flag',
    time: '5 mins ago',
    link: '/complaints/2'
  },
  {
    title: 'New user',
    description: 'A new user has registered an account.',
    icon: 'user-add',
    time: '1 hour ago',
    link: '/users/1'
  },
  {
    title: 'New complaint',
    description: 'A new complaint is submitted.',
    icon: 'message',
    time: '1 hour ago',
    link: '/complaints/1'
  },
  {
    title: 'Complaint resolved',
    description: 'A complaint is successfully resolved.',
    icon: 'flag',
    time: '3 hours ago',
    link: '/complaints/2'
  },
  {
    title: 'New user',
    description: 'A new user has registered an account.',
    icon: 'user-add',
    time: '7 hours ago',
    link: '/users/1'
  },
  {
    title: 'New complaint',
    description: 'A new complaint is submitted.',
    icon: 'message',
    time: '16 hours ago',
    link: '/complaints/1'
  },
  {
    title: 'Complaint resolved',
    description: 'A complaint is successfully resolved.',
    icon: 'flag',
    time: 'Yesterday',
    link: '/complaints/2'
  },
  {
    title: 'New user',
    description: 'A new user has registered an account.',
    icon: 'user-add',
    time: 'Yesterday',
    link: '/users/1'
  }
]

const users = [
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

export default class App extends Component {
  state = {
    collapsed: true,
    notifications: notifications.map((data, index) => ({ ...data, index })),
    users,
    complaints,
    loading: true
  }

  componentDidMount() {
    fetch('http://35.187.255.28:5000/complaint')
      .then(res => res.json())
      .then(json => json.reduce((reverse, data) => [data, ...reverse]))
      .then(json =>
        this.setState({
          loading: false,
          complaints: [
            ...json.map(complaint => ({
              link: complaint.ha_complaint_id.toString(),
              title: complaint.ha_complaint_name,
              location: complaint.ha_complaint_location || 'Unknown',
              worker: 'John',
              rating: 4,
              date: '31 Dec',
              description: complaint.ha_complaint_description,
              user: complaint.ha_complaint_chatbotuserid,
              submitted: '2 mins ago',
              completed: false,
              chat: []
            })),
            ...this.state.complaints
          ]
        })
      )
  }

  handleDeleteNoti = index =>
    this.setState({
      notifications: this.state.notifications.filter(
        noti => noti.index !== index
      )
    })

  handleCollapse = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { collapsed, loading } = this.state
    return (
      <BrowserRouter>
        <Layout
          style={{
            minHeight: '100vh'
          }}
        >
          <Sidebar collapsed={collapsed} handleCollapse={this.handleCollapse} />
          <Layout
            style={{
              marginLeft: collapsed ? 80 : 200,
              transition: 'margin 0.2s'
            }}
          >
            <Header />
            <Content
              loading={loading}
              notifications={this.state.notifications}
              users={this.state.users}
              complaints={this.state.complaints}
              handleDeleteNoti={this.handleDeleteNoti}
            />
            <Footer />
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
