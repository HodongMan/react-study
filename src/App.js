import React, { Component } from 'react';

import {
  Header,
  Timeline,
  TimelineHeader,
} from './components';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(),
      count : 0,
    }
    this.addCount = this.addCount.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000)
  }

  tick() {
    this.setState({
      date : new Date(),
    })
  }

  addCount() {
    this.setState({
      count : this.state.count + 1,
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <TimelineHeader 
            title={"타임라인2"}
          />
          <div id="timeline">
            <Timeline 
              name={"제목1"}
              description={"내용1"}
            />
            <Timeline 
              name={"시간 체크 "}
              description={this.state.date.toLocaleTimeString()}
            />
            <Timeline 
              addCount={this.addCount}
              name={"시간 체크 "}
              description={this.state.count}
            />
          </div>
         </div>
      </div>
      );
    }
}

export default App;
