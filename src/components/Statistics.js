import React from 'react'
import { LineChart } from './charts'

export default class Statistics extends React.Component {
  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <LineChart width={1000} height={400} />
      </div>
    )
  }
}
