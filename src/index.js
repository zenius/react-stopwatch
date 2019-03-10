import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer";
import TimeList from "./components/TimeList";
//import "./styles.css";

export default class App extends Component {
  timerId;
  state = {
    currentTime: 0,
    prevTime: 0,
    recordedTimes: [],
    isStart: false
  };

  handleStartStop = () => {
    this.setState({ isStart: !this.state.isStart }, () => {
      if (this.state.isStart) {
        this.timerId = setInterval(() => {
          let currentTime = this.state.currentTime;
          currentTime += 0.01;
          this.setState({ currentTime: currentTime }, () => {
            // console.log("currentTime", this.state.currentTime);
          });
        });
      } else {
        clearInterval(this.timerId);
        this.setState({ prevTime: this.state.currentTime });
      }
    });
  };

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState({
      currentTime: 0,
      prevTime: 0,
      recordedTimes: [],
      isStart: false
    });
  };

  handleRecordTime = () => {
    let { currentTime, recordedTimes } = this.state;
    recordedTimes.push(currentTime);
    this.setState({ recordedTimes: recordedTimes });
  };

  render() {
    const { currentTime, isStart, prevTime, recordedTimes } = this.state;
    const timeTodisplay = isStart ? currentTime : prevTime;
    return (
      <div className="App">
        <p>{timeTodisplay.toFixed(2)}</p>
        <Timer
          handleStartStop={this.handleStartStop}
          handleReset={this.handleReset}
          handleRecordTime={this.handleRecordTime}
        />
        <p>Recorded Time</p>
        <TimeList recordedTimes={recordedTimes} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
