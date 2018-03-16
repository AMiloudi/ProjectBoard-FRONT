import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import {fetchProjects} from "../actions/projects/fetch";
import deleteProject from "../actions/projects/delete";
import FlatButton from "material-ui/FlatButton";
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table';
import CreateProjectButton from "../components/CreateProjectButton";

class ProjectBoard extends PureComponent {
  componentWillMount() {
    this.props.fetchProjects()
  }

  deleteThisProject = projectId => event => this.props.deleteProject(projectId);

  renderProject = (project, index) => {
    const title = project.title
    const text = project.text
    const status = project.status[0].name

    return (
      <TableRow key={index}>
          <TableRowColumn>{title}</TableRowColumn>
          <TableRowColumn>{text}</TableRowColumn>
          <TableRowColumn>{status}</TableRowColumn>
          <TableRowColumn>
            <FlatButton label="Remove" onClick={this.deleteThisProject(project._id)} />
          </TableRowColumn>
        </TableRow>
    )
  }

  render(project, index){
    if (!this.props.signedIn) {
      this.props.push(`/sign-in`);
    }

    const {projects} = this.props
    return (
      <div>
        <h3>Current projects</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Project</TableHeaderColumn>
                <TableHeaderColumn>Text</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map(this.renderProject)}
            </TableBody>
          </Table>
        <CreateProjectButton />
        </div>
    )
  }
}

const mapStateToProps = ({ projects, currentUser }) => ({ projects, signedIn: !!currentUser && !!currentUser._id });

export default connect(mapStateToProps, { fetchProjects, deleteProject, push })(ProjectBoard);
