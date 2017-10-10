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
    this.selectAll = this.selectAll.bind(this)
    this.state = {
      messages: data
    }
  }

  toggleSelected (message) {
    const messages = [...this.state.messages]
    let messageID = message.props.content.id
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['id'] === messageID) {
        if (messages[i]['selected'] === false || messages[i]['selected'] === undefined) {
          messages[i]['selected'] = true
        }
        else {
          messages[i]['selected'] = false
        }
      }
    }
    this.setState({...this.state, messages: messages})
  }

  toggleStarred (message) {
      let messageID = message.props.content.id
      const messages = [...this.state.messages]
      for (let i = 0; i < messages.length; i++) {
        if (messages[i]['id'] === messageID) {
          if (messages[i]['starred'] === false || messages[i]['starred'] === undefined) {
            messages[i]['starred'] = true
          }
          else {
            messages[i]['starred'] = false
          }
        }
      }
      this.setState({messages: messages})
  }

  selectAll () {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      messages[i]['selected'] = true
    }
    this.setState({messages: messages})
  }

  render() {
    return (
      <div className="main">
        <Toolbar selectAll={this.selectAll}/>
        <ComposeForm />
        <MessageList details={this.state.messages} toggleSelected={this.toggleSelected} toggleStarred={this.toggleStarred}/>
      </div>
    )
  }
}

export default App
