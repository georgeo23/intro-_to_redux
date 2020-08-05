import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Players from './components/players.js'
import NavBar from './navbar.js'

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" render={() => <h1>Welcome to Sports Roster</h1>} />

          <Route path="/players" component={ Players } />


        </Switch>
      </>
    )
  }
}

export default App;
