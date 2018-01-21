import React from 'react'
import { Layout, Row, Col, Card } from 'antd'
import { BarChart, LineChart, PieChart, RadarChart } from './charts'
import Map from './Map'

export default class Sidebar extends React.Component {
  render() {
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <Row gutter={16} style={{ margin: '16px 0px' }}>
          <Col span={12}>
            <Map
              height="210px"
              currentLocation={{ lat: 37.782, lng: -122.443 }}
            />
          </Col>
          <Col span={6}>
            <Card title="Complaints" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Users" extra={<a href="#">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '16px 0px' }}>
          <Col span={6}>
            <Card title="Line Chart">
              <LineChart />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Bar Chart">
              <BarChart />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Pie Chart">
              <PieChart />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Radar Chart">
              <RadarChart />
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    )
  }
}
