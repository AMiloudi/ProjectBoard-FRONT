
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import createProject from '../actions/projects/create'
import './CreateProjectButton.css'

class CreateProjectButton extends PureComponent {

  submitProject(event) {
    event.preventDefault()
    const newProject = {
       title: this.refs.title.getValue(),
       text: this.refs.text.getValue(),
      }
    this.props.createProject(newProject)
    this.refs.form.reset()
  }


  render() {
    return (
      <div className="createProject" >
        <div className="ProjectBox">Add Project</div>
        <form ref="form">
          <div className="input">
            <TextField ref= "title" type="title"/>
          </div>
          <div className="ProjectBox-second">text</div>
          <div className="input">
            <TextField ref="text" type="text" />
          </div>
          <div className="CreateButton">
            <RaisedButton
            onClick={ this.submitProject.bind(this) }
            secondary={true}
            label="Create new project"
            />
          </div>
        </form>
      </div>
    )
  }
}


export default connect(null, { createProject })(CreateProjectButton)
