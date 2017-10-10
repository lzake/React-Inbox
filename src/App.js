import React, { Component } from 'react'
import './App.css'
import Toolbar from './Toolbar'
import ComposeForm from './ComposeForm'
import MessageList from './MessageList'

import data from './data'

class App extends Component {

  constructor () {
    super()
    this.toggleStarred = this.toggleStarred.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
    this.state = {
      messages: data
    }
  }

  toggleSelected (message) {
    const messages = {...this.state.messages}
    console.log(message)
    this.setState({messages: messages})
  }

  toggleStarred () {
      const messages = {...this.state.messages}
      this.setState({messages: messages})
  }

  render() {
    return (
      <div className="main">
        <Toolbar />
        <ComposeForm />
        <MessageList details={this.state.messages} toggleSelected={this.toggleSelected}/>
      </div>
    )
  }
}

export default App;
