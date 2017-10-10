import React, { Component } from 'react'

class Message extends Component {

    constructor () {
        super()
        this.toggleSelected = this.toggleSelected.bind(this)
        this.checkStarred = this.checkStarred.bind(this)
        this.checkRead = this.checkRead.bind(this)
        this.toggleStarred = this.toggleStarred.bind(this)
    }

    componentDidMount () {
        this.checkStarred()
        this.checkRead()
    }

    toggleSelected () {
        this.props.toggleSelected(this)
        let div = document.querySelector('#id' + this.props.content.id)
        if (div.classList.contains('selected')) {
            div.classList.remove('selected')
        }
        else {
            div.classList.add('selected')
        }
    }

    toggleStarred () {
        this.props.toggleStarred(this)
        let star = document.querySelector('#starID' + this.props.content.id)
        if (star.classList.contains('fa-star-o')) {
            star.classList.remove('fa-star-o')
            star.classList.add('fa-star')
        } else {
            star.classList.remove('fa-star')
            star.classList.add('fa-star-o')
        }
    }

    checkStarred () {
        let star = document.querySelector('#starID' + this.props.content.id)
        if (this.props.content.starred) {
            star.classList.remove('fa-star-o')
            star.classList.add('fa-star')
        }
    }

    checkRead () {
        let div = document.querySelector('#id' + this.props.content.id)
        if (this.props.content.read) {
            div.classList.remove('unread')
            div.classList.add('read')
        }
    }

    render () {
        let classID = "id" + this.props.content.id
        let starID = "starID" + this.props.content.id

        return (
            <div className="row message unread" id={classID}>
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" onChange={this.toggleSelected}/>
                </div>
                <div className="col-xs-2">
                  <i className="star fa fa-star-o" id={starID} onClick={this.toggleStarred}></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11">
                {
                    this.props.content.labels.map( (label) => <span key={label} className="label label-warning">{label}</span>)
                }
              <a href="#">
                {this.props.content.subject}
              </a>
            </div>
          </div>
        )
    }
}

export default Message