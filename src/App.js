import React, { Component } from 'react'

//imports components of webpage
import Toolbar from './Components/Toolbar'
import ComposeForm from './Components/ComposeForm'
import MessageList from './Components/MessageList'

//imports messsage data
import data from './MessageData'

//defines app (whole page concept)
class App extends Component {
//this here constructor sets the state as something imported, in this case data, so you dont have to bind 4thousand things
  constructor () {
    super()
    this.state = {
      messages: data
    }}

  toggleSelected = (message) => {
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
    this.setState({...this.state, messages: messages})}

  toggleStarred = (message) => {
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
      this.setState({messages: messages})}

  selectAll = () => {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      messages[i]['selected'] = true
    }
    this.setState({messages: messages})}

  selectNone = () => {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      messages[i]['selected'] = false
    }
    this.setState({messages: messages})
  }

  markRead = () => {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['selected'] === true) {
        messages[i]['read'] = true
      }
    }
    this.setState({messages: messages})
  }

  markUnread = () => {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['selected'] === true) {
        messages[i]['read'] = false
      }
    }
    this.setState({messages: messages})
  }

  remove = () => {
    const messages = [...this.state.messages]
    const newMessages = messages.filter( (message) => message['selected'] !== true)
    this.setState({messages: newMessages})
  }

  addLabel = (label) => {
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

  removeLabel = (label) => {
    const messages = [...this.state.messages]
    for (let i = 0; i < messages.length; i++) {
      if (messages[i]['selected'] === true) {
        const newLabels = messages[i]['labels'].filter( (i) => i !== label)
        messages[i]['labels'] = newLabels
      }
    }
    this.setState({messages: messages})
  }

//determines render order and appearance

  render() {return (


      <div className="main">

          
        <Toolbar 
          data={this.state.messages} 
          selectAll={this.selectAll} 
          selectNone={this.selectNone} 
          markRead={this.markRead} 
          markUnread={this.markUnread} 
          remove={this.remove} 
          addLabel={this.addLabel} 
          removeLabel={this.removeLabel}
          />


        

        <MessageList 
        details={this.state.messages} 
        toggleSelected={this.toggleSelected} 
        toggleStarred={this.toggleStarred}
        />

        <ComposeForm />

      </div>


     //end of render determination for whole page (app) 
    )}
    //end of 'app' component
}


//exports app to index.js for display
export default App
