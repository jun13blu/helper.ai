import React from 'react'
import { PieChart, Pie, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 }
]

export default class PieC extends React.Component {
  render() {
    return (
      <PieChart width={220} height={110}>
        <Pie
          data={data}
          // cx={200}
          // cy={200}
          outerRadius={30}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    )
  }
}
