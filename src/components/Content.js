import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import { Notifications } from './notifications'
import { Complaints } from './complaints'
import { Users } from './users'
import Statistics from './Statistics'

export default class Sidebar extends React.Component {
  render() {
    const { notifications, handleDeleteNoti } = this.props
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route
          path="/notifications"
          render={props => (
            <Notifications
              notifications={notifications}
              handleDelete={handleDeleteNoti}
            />
          )}
        />
        <Route path="/complaints" component={Complaints} />
        <Route path="/users" component={Users} />
        <Route path="/statistics" component={Statistics} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    )
  }
}
