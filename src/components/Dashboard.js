import React from 'react'
import { Layout, Row, Col, Card } from 'antd'
import { BarChart, LineChart, PieChart, RadarChart } from './charts'
import { Link } from 'react-router-dom'
import Map from './Map'

export default class Sidebar extends React.Component {
  render() {
    const { users, complaints } = this.props
    return (
      <Layout.Content style={{ padding: '8px 48px 0 48px' }}>
        <Row gutter={16} style={{ margin: '16px 0px' }}>
          <Col span={12}>
            <Map
              height="280px"
              currentLocation={{ lat: 37.782, lng: -122.443 }}
            />
          </Col>
          <Col span={6}>
            <Card title="Complaints" extra={<Link to="/complaints">More</Link>}>
              {complaints.progress.slice(0, 5).map(complaint => (
                <p>
                  <Link to={`/complaints/${complaint.link}`}>
                    {complaint.title}
                  </Link>
                </p>
              ))}
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Users" extra={<Link to="/users">More</Link>}>
              {users.slice(0, 5).map(user => (
                <p>
                  <Link to={`/users/${user.link}`}>{user.name}</Link>
                </p>
              ))}
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
