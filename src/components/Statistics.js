import React from 'react'
import { Layout } from 'antd'
import { BarChart, LineChart, PieChart, RadarChart } from './charts'

export default class Statistics extends React.Component {
  render() {
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <h2>Statistics</h2>
        <LineChart width={1000} height={400} />
      </Layout.Content>
    )
  }
}
