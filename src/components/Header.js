import React from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    return (
      <Layout.Header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: 'white' }}>helper.ai</h1>
        </Link>
      </Layout.Header>
    )
  }
}
