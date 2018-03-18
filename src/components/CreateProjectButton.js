
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import createProject from '../actions/projects/create'
import {grey500} from 'material-ui/styles/colors';

const styles = {
  hintText: {
    color:grey500
  }
};

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class CreateProjectButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

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
    if (!this.props.signedIn) return null

    return (
      <div style={paperStyle} className="Form" zDepth={4}>
        <h2>Add Project</h2>
        <form ref="form">
          <div className="input">
            <TextField ref= "title" type="title" hintText= "Project Title"
            style={styles.hintText}
            />
          </div>
          <h3>text</h3>
          <div className="input">
            <TextField
            ref="text"
            type="text"
            />
          </div>
            <FlatButton
            onClick={ this.submitProject.bind(this) }
            label="Create new project"
            />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createProject })(CreateProjectButton)
