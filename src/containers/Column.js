import React, { PureComponent } from "react";
import ReactDOM from 'react-dom'
import { connect } from "react-redux";
import {fetchProjects} from "../actions/projects/fetch";
import deleteProject from "../actions/projects/delete";
import { push } from "react-router-redux";
import './Column.css'


class Column extends PureComponent {
  componentWillMount() {
    this.props.fetchProjects()
  }

  componentDidMount () {
    var container = ReactDOM.findDOMNode(this);
    this.props.draco.containers.push(container);
  }

  deleteThisProject = projectId => event => this.props.deleteProject(projectId);

  renderProject = (project, index) => {
      const title = project.title
      const text = project.text

      if(project.status[0].name !== this.props.laneName) {
        return
      }

      return (
        <div data-projectid={project._id} className="col-md-12 card">
          <div className="cardHeader">
            {title} <i className="fas fa-times" onClick={this.deleteThisProject(project._id)}></i>
          </div>
          <div className="cardBody">
            {text}
          </div>
        </div>
      )
    }

  render(project, index){
      const {projects} = this.props
    return (
       <div className="col-md-2 lane" data-name={this.props.laneName} key={index}>
           {projects.map(this.renderProject)}
      </div>

    )
  }
}


const mapStateToProps = ({ projects}) => ({ projects});

export default connect(mapStateToProps, { fetchProjects, deleteProject, push })(Column);
