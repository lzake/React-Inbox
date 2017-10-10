import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
    render () {
        return (
            <section>
                {this.props.details.map( (message) => <Message key={message.id} content={message} toggleSelected={this.props.toggleSelected} toggleStarred={this.props.toggleStarred}/>)}
            </section>
        )
    }
}

export default MessageList