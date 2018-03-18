import React, { PureComponent } from "react";
import CreateProjectButton from "../components/CreateProjectButton";
import Dragula from 'react-dragula'
import Column from './Column'

class ProjectBoard extends PureComponent {

  render(){
    let options = [];
    let Draco = Dragula([], options);

    return (
      <div>
        <Column draco={Draco} />
        <Column draco={Draco}/>
        <Column draco={Draco} />
        <Column draco={Draco}/>
        <Column draco={Draco} />
        <Column draco={Draco}/>
        <Column draco={Draco} />
        <Column draco={Draco}/>
        <CreateProjectButton />
      </div>
    )
  }
}


export default ProjectBoard
