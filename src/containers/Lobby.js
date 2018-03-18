import React, { PureComponent } from 'react'
import ProjectBoard from '../containers/ProjectBoard'
import CreateProjectButton from '../components/CreateProjectButton'
import './Lobby.css'

class Lobby extends PureComponent {

  render() {
    return (
      <div className="Board">
        <ProjectBoard/>
        <CreateProjectButton/>
      </div>
    )
  }
}

export default Lobby
