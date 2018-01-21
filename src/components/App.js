import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from './sidebar'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const data = [
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

export default class App extends Component {
  state = {
    collapsed: true,
    notifications: data.map((data, index) => ({ ...data, index }))
  }

  handleDeleteNoti = index =>
    this.setState({
      notifications: this.state.notifications.filter(
        noti => noti.index !== index
      )
    })

  handleCollapse = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { collapsed } = this.state
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
              notifications={this.state.notifications}
              handleDeleteNoti={this.handleDeleteNoti}
            />
            <Footer />
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
