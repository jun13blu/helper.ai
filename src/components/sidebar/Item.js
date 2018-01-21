import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

export default class Item extends React.Component {
  render() {
    const { icon, description, ...props } = this.props
    return (
      <Menu.Item {...props}>
        <Link to={`/${props.eventKey}`}>
          <Icon type={icon} />
          {description ? <span>{description}</span> : null}
        </Link>
      </Menu.Item>
    )
  }
}
