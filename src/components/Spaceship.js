import React from 'react'
import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component {
  render () {
    return (
      <div className='spaceship-div'>
        <h3>{this.props.name}</h3>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: 'ship',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
