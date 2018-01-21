import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserDetails from './UserDetails'
import UserList from './UserList'

export default class Complaints extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:user" component={UserDetails} />
        <Route render={() => <Redirect to="/complaints" />} />
      </Switch>
    )
  }
}
