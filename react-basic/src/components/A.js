import React, {Component} from 'react'

export default class A extends Component {
  componentDidMount () {
    /* onClickの挙動ここから　*/
    this.el.addEventListener('click', () => this.props.updateComment("simurate onClick"))
    /* onClickの挙動ここまで　*/
  }
  render() {
    return(
      <span>
        <button ref={el => this.el = el}>Simurate "onClick"</button>
        <button onClick={() => this.props.updateComment("A")}>A</button>
      </span>
    )
  }
}
