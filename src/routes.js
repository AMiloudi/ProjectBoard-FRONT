import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Evaluations, Students } from './components'
import { Lobby, Batches, SignIn, SignUp} from './containers'


export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Lobby} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    )
  }
}
