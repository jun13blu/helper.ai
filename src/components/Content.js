import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import { Notifications } from './notifications'
import { Complaints } from './complaints'
import { Users } from './users'
import Statistics from './Statistics'
import { Layout } from 'antd'

export default class Sidebar extends React.Component {
  render() {
    const { notifications, handleDeleteNoti, users, complaints } = this.props
    return (
      <Layout.Content style={{ padding: '16px 48px 0 48px' }}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Dashboard users={users} complaints={complaints} />
            )}
          />
          <Route
            path="/notifications"
            render={props => (
              <Notifications
                notifications={notifications}
                handleDelete={handleDeleteNoti}
              />
            )}
          />
          <Route
            path="/complaints"
            render={props => <Complaints complaints={complaints} />}
          />
          <Route path="/users" render={props => <Users users={users} />} />
          <Route path="/statistics" component={Statistics} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Layout.Content>
    )
  }
}
