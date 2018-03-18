import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../../actions/user/sign-out'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  signOut = (event) => {
    event.preventDefault()
    this.props.signOut()
  }

  signUp = () => {
    this.props.push('/sign-up')
  }

  render() {
    const { signedIn } = this.props
    let iconMenu;
    if( signedIn === true){
      iconMenu = <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem primaryText="Sign out" label="Sign out" onClick={this.signOut.bind(this)} />
      </IconMenu>
    } else {
      iconMenu =  <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem primaryText="Sign up" label="Sign up" onClick={this.signUp} />
      </IconMenu>
    }
    return(
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <h2 style={{float: 'left', marginRight: '1.5rem'}}>Flowcharts</h2>
      <h2 style={{float: 'left', marginRight: '1.5rem'}}>Wireframes</h2>
      <h2 style={{float: 'left', marginRight: '1.5rem'}}>Prototype</h2>
      <h2 style={{float: 'left', marginRight: '1.5rem'}}>Development</h2>
      <h2 style={{float: 'left', marginRight: '1.5rem'}}>Test</h2>
      <h2 style={{float: 'left', marginRight: '3.5rem'}}>Launch</h2>
      {iconMenu}
      </div>
    )
  }
}


const mapStateToProps = ({ currentUser }) => ({
  signedIn : (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { push, signOut })(Navigation)
