import React, { Component } from 'react'

class Toolbar extends Component {

    constructor () {
      super()
      this.allSelected = this.allSelected.bind(this)
      this.someSelected = this.someSelected.bind(this)
      this.noneSelected = this.noneSelected.bind(this)
      this.selectAll = this.selectAll.bind(this)
      this.selectNone = this.selectNone.bind(this)
      this.handleSelect = this.handleSelect.bind(this)
      this.markRead = this.markRead.bind(this)
      this.markUnread = this.markUnread.bind(this)
      this.remove = this.remove.bind(this)
      this.addLabel = this.addLabel.bind(this)
      this.removeLabel = this.removeLabel.bind(this)
    }

    componentWillReceiveProps(nextProps) {
      let totalMessages = this.props.data.length
      let selectedMessages = this.props.data.filter( (i) => i['selected'] === true).length
      if (selectedMessages === 0) {
        this.noneSelected()
      } else if (selectedMessages === totalMessages) {
        this.allSelected()
      } else {
        this.someSelected()
      }
    }
    

    selectAll () {
      this.props.selectAll()
    }

    selectNone () {
      this.props.selectNone()
    }

    allSelected () {
      let icon = document.querySelector('#check')
      icon.classList.remove('fa-minus-square-o')
      icon.classList.remove('fa-square-o')
      icon.classList.add('fa-check-square-o')
    }

    someSelected () {
      let icon = document.querySelector('#check')
      icon.classList.remove('fa-check-square-o')
      icon.classList.remove('fa-square-o')
      icon.classList.add('fa-minus-square-o')
    }

    noneSelected () {
      let icon = document.querySelector('#check')
      icon.classList.remove('fa-check-square-o')
      icon.classList.remove('fa-minus-square-o')
      icon.classList.add('fa-square-o')
    }

    handleSelect () {
      let totalMessages = this.props.data.length
      let selectedMessages = this.props.data.filter( (i) => i['selected'] === true).length
      if (selectedMessages === totalMessages) {
        this.selectNone()
      } else {
        this.selectAll()
      }
    }

    markRead () {
      this.props.markRead()
    }

    markUnread () {
      this.props.markUnread()
    }

    remove () {
      this.props.remove()
    }

    addLabel () {
      let label = document.querySelector('#addLabel').value
      this.props.addLabel(label)
    }

    removeLabel () {
      let label = document.querySelector('#removeLabel').value
      this.props.removeLabel(label)
    }

    checkUnread () {

    }

    render () {
        return (
            <div className="row toolbar">
            <div className="col-md-12">
              <p className="pull-right">
                <span className="badge badge"></span>
                unread messages
              </p>
          
              <a className="btn btn-danger">
                <i className="fa fa-plus"></i>
              </a>
          
              <button className="btn btn-default" id="groupCheck" onClick={this.handleSelect}>
                <i className="fa fa-square-o" id="check"></i>
              </button>
          
              <button className="btn btn-default" onClick={this.markRead}>Mark As Read</button>
          
              <button className="btn btn-default" onClick={this.markUnread}>Mark As Unread</button>
          
              <select className="form-control label-select" onChange={this.addLabel} id="addLabel">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>
          
              <select className="form-control label-select" onChange={this.removeLabel} id="removeLabel">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>
          
              <button className="btn btn-default" onClick={this.remove}>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        )
    }
}

export default Toolbar