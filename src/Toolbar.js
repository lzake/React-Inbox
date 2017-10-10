import React, { Component } from 'react'

class Toolbar extends Component {

    constructor () {
        super()
        this.selectAll = this.selectAll.bind(this)
    }

    selectAll () {
        this.props.selectAll()
    }

    render () {
        return (
            <div className="row toolbar">
            <div className="col-md-12">
              <p className="pull-right">
                <span className="badge badge">2</span>
                unread messages
              </p>
          
              <a className="btn btn-danger">
                <i className="fa fa-plus"></i>
              </a>
          
              <button className="btn btn-default" id="groupCheck" onClick={this.selectAll}>
                <i className="fa fa-minus-square-o"></i>
              </button>
          
              <button className="btn btn-default">Mark As Read</button>
          
              <button className="btn btn-default">Mark As Unread</button>
          
              <select className="form-control label-select">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>
          
              <select className="form-control label-select">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
              </select>
          
              <button className="btn btn-default">
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        )
    }
}

export default Toolbar