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
    this.selectNone = this.selectNone.bind(this)
    this.markRead = this.markRead.bind(this)
    this.markUnread = this.markUnread.bind(this)
    this.remove = this.remove.bind(this)
    this.addLabel = this.addLabel.bind(this)
    this.removeLabel = this.removeLabel.bind(this)
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

  selectNone () {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      messages[i]['selected'] = false
    }
    this.setState({messages: messages})
  }

  markRead () {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['selected'] === true) {
        messages[i]['read'] = true
      }
    }
    this.setState({messages: messages})
  }

  markUnread () {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['selected'] === true) {
        messages[i]['read'] = false
      }
    }
    this.setState({messages: messages})
  }

  remove () {
    const messages = [...this.state.messages]
    const newMessages = messages.filter( (message) => message['selected'] !== true)
    this.setState({messages: newMessages})
  }

  addLabel (label) {
    if (label !== 'Apply label') {
      const messages = [...this.state.messages]
      for (let i = 0; i < messages.length; i++) {
        if (messages[i]['selected'] === true) {
          if (messages[i]['labels'].includes(label) !== true) {
            messages[i]['labels'].push(label)
          }
        }
      }
      this.setState({messages: messages})
    }
  }

  removeLabel (label) {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['selected'] === true) {
        const newLabels = messages[i]['labels'].filter( (i) => i !== label)
        messages[i]['labels'] = newLabels
      }
    }
    this.setState({messages: messages})
  }

  render() {
    return (
      <div className="main">
        <Toolbar data={this.state.messages} selectAll={this.selectAll} selectNone={this.selectNone} markRead={this.markRead} markUnread={this.markUnread} remove={this.remove} addLabel={this.addLabel} removeLabel={this.removeLabel}/>
        <ComposeForm />
        <MessageList details={this.state.messages} toggleSelected={this.toggleSelected} toggleStarred={this.toggleStarred}/>
      </div>
    )
  }
}

export default App
