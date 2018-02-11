import React, { Component } from 'react';
import './App.css';
import A from './components/A'
import B from './components/B'

/*
memo : 手順
1. App.jsにupdateCommentのfunctionを作る
2. updateCommentをAとBにprops経由で渡す
3. AとBでupdateCommentを任意の引数をいれて実行する
  -> App.jsのstateが更新されて表示が変わる
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      comment: "Hello"
    }
  }
  updateComment = (comment) => {
    this.setState({...this.state, comment:comment})
    console.log("I got it!")
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.comment}</h1>
        <A updateComment={this.updateComment} foo={() => {
          console.log('simurate "onClick!!" react helper!! from parent')
        }} />
        <B updateComment={this.updateComment}/>
      </div>
    );
  }
}

export default App;
