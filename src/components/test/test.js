import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}
