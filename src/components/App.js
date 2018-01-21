import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from './sidebar'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { complaints, notifications, users } from './data.json'

export default class App extends Component {
  state = {
    collapsed: true,
    notifications: notifications.map((data, index) => ({ ...data, index })),
    users,
    complaints,
    loading: true
  }

  componentDidMount() {
    const reload = setTimeout(() => window.location.reload(true), 5000)
    fetch('http://35.187.255.28:5000/complaint')
      .then(res => res.json())
      .then(json => json.reduce((reverse, data) => [data, ...reverse]))
      .then(json =>
        this.setState(
          {
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
          },
          () => clearTimeout(reload)
        )
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
