import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: ''
    }
  }
  handleClick = () => {
    if(this.state.menuStatus === 'open') {
      this.setState({
        menuStatus: 'closed'
      })
    } else {
      this.setState({
        menuStatus: 'open'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <header>
            <h1>Start Bootstrap</h1>
          </header>
          {/* <div> */}
            <img 
            onClick={this.handleClick}
            src="data:image/jpeg;base64,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"
            alt="Hamburger Button"
            />
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          {/* </div> */}
            <div className={'side-menu-' + this.state.menuStatus}>

            </div>
        </nav>


        {/* <div className='box'></div> */}
        {/* <div className='main'>
          <h1 className='hp'>Harry Potter</h1>
        </div> */}
      </div>
    );
  }
}

export default App;
