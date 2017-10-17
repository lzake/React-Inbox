import React, { Component } from 'react'

//importing message listing
import Messages from './Messages'

class MessageList extends Component {
    render () {
        return (
            <section className="smallmid mid" >

                {this.props.details.map( (messages) => 
                    
                    <Messages 
                    key={messages.id} 
                    content={messages} 
                    toggleSelected={this.props.toggleSelected} 
                    toggleStarred={this.props.toggleStarred}/>
                
                )}

            </section>
        )
    }
}

export default MessageList