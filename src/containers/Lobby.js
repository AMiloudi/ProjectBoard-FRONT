import React, { PureComponent } from 'react'
import ProjectBoard from '../containers/ProjectBoard'
import './Lobby.css'

class Lobby extends PureComponent {

  render() {
    return (
      <div className="Board">
        <ProjectBoard/>
      </div>
    )
  }
}

export default Lobby
