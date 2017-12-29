import React, { Component } from 'react'

export default class B extends Component {
  componentDidMount() {
    this.el.addEventListener("click", () => this.props.updateComment("B") )
  }
  render(){
    return <button ref={el => this.el = el}>B</button>
  }
}
