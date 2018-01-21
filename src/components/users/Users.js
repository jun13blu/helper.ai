import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserDetails from './UserDetails'
import UserList from './UserList'

export default class Complaints extends React.Component {
  render() {
    const { users } = this.props
    return (
      <Switch>
        <Route
          exact
          path="/users"
          render={props => <UserList users={users} />}
        />
        <Route path="/users/:user" component={UserDetails} />
        <Route render={() => <Redirect to="/complaints" />} />
      </Switch>
    )
  }
}
