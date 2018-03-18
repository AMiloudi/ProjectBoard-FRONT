import React, { PureComponent } from "react";
import ReactDOM from 'react-dom'
import { connect } from "react-redux";
import IconButton from 'material-ui/IconButton'
import {fetchProjects} from "../actions/projects/fetch";
import deleteProject from "../actions/projects/delete";
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import { push } from "react-router-redux";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import './Column.css'


const styles = {
  headerStyle: {
    backgroundColor: '#40bf80',
    borderTopLeftRadius: '1.5rem',
    textAlign: 'left',
    borderTopRightRadius:'1.5rem'
  },
  headerTextStyle:{
    textAlign: 'center',
  },
  cardStyle: {
    borderRadius: '1.5rem',
    overFlow: 'hidden',
    width: '12rem',
    height: '13rem',
    margin: '1rem',
  }
};


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

      return (
        <Card style={styles.cardStyle} key={index}>
            <CardHeader
            style={styles.headerStyle}
            titleStyle={styles.headerTextStyle}
            title={title}
            />
            <CardText>{text}</CardText>
            <CardActions>
              <IconButton onClick={this.deleteThisProject(project._id)}>
                <DeleteIcon/>
              </IconButton>
            </CardActions>
        </Card>
      )
    }

  render(project, index){
      const {projects} = this.props
    return (
       <div className='container' >
           {projects.map(this.renderProject)}
        </div>

    )
  }
}


const mapStateToProps = ({ projects}) => ({ projects});

export default connect(mapStateToProps, { fetchProjects, deleteProject, push })(Column);
