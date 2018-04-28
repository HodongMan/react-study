import React, { Component } from 'react';

import {
  Header,
  Timeline,
  TimelineHeader,
} from './components';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <TimelineHeader />
          <div id="timeline">
            <Timeline />
            <Timeline />
          </div>
         </div>
      </div>
      );
    }
}

export default App;
