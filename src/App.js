import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="hello" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>LogIn</button>}
      </div>
    )
  }
}

export default App
