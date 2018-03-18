import React, { PureComponent } from 'react'
import './Navigation.css'

class Navigation extends PureComponent {

  render() {
    return(
      <div className="menu">
        <div className="container">
          <div className="col-md-2 menuItem">Flowcharts</div>
          <div className="col-md-2 menuItem">Wireframes</div>
          <div className="col-md-2 menuItem">Prototype</div>
          <div className="col-md-2 menuItem">Development</div>
          <div className="col-md-2 menuItem">Test</div>
          <div className="col-md-2 menuItem">
            Launch
          </div>
        </div>
      </div>
    )
  }
}


export default Navigation
