//code sourced from class assignment video//

import React from "react"
import WelcomeScreen from "./components/WelcomeScreen"
import Main from "./components/Main"

// Creating variables for Menu (Now Main) Screen - 
//when defining a state, you use a value previously defined elsewhere.

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { welcome: false }
  }

  welcome = (status) => {
    this.setState({ welcome: status })
  }
  render() {
    let screen;
    if (!this.state.welcome) {
      screen =

        <WelcomeScreen welcome={this.welcome}></WelcomeScreen>


    } else {

      screen = <Main welcome={this.welcome}></Main>


    }
    return screen;

  }
}


