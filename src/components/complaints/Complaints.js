import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ComplaintList from './ComplaintList'
import Issue from './Issue'

export default class Complaints extends React.Component {
  render() {
    const { complaints } = this.props
    return (
      <Switch>
        <Route
          exact
          path="/complaints"
          render={props => <ComplaintList complaints={complaints} />}
        />
        <Route path="/complaints/:issue" component={Issue} />
        <Route render={() => <Redirect to="/complaints" />} />
      </Switch>
    )
  }
}
