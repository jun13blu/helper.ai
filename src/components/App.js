import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import Sidebar from './sidebar'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

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

const complaints = {
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

export default class App extends Component {
  state = {
    collapsed: true,
    notifications: notifications.map((data, index) => ({ ...data, index })),
    users,
    complaints,
    loading: true
  }

  componentDidMount() {
    fetch('http://10.148.0.2:5000/complaint').then(res => console.log(res))
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
