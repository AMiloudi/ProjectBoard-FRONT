import React, { PureComponent } from "react";
import Dragula from 'react-dragula'
import Column from './Column'
import { connect } from "react-redux";
import moveProject from '../actions/projects/move'


class ProjectBoard extends PureComponent {

  droppedProject = (el, target, source, sibling) => {
    this.props.moveProject(el.dataset.projectid, target.dataset.name)
  }

  render(){
    let options = [];
    let Draco = Dragula([], options);
    Draco.on("drop", this.droppedProject)

    return (
      <div className="container">
        <div className="row laneContainer">
          <Column draco={Draco} laneName="Flowcharts"/>
          <Column draco={Draco} laneName="Wireframes"/>
          <Column draco={Draco} laneName="Prototype"/>
          <Column draco={Draco} laneName="Development"/>
          <Column draco={Draco} laneName="Test"/>
          <Column draco={Draco} laneName="Launch"/>
        </div>
      </div>
    )
  }
}


export default connect(null, { moveProject})(ProjectBoard);
