import React from "react";
import PropTypes from "prop-types";

const Timer = props => {
  const { handleStartStop, handleReset, handleRecordTime } = props;
  return (
    <section>
      <button onClick={handleStartStop}>Start/Stop</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRecordTime}>Record Time</button>
    </section>
  );
};

Timer.propTypes = {
  handleStartStop: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleRecordTime: PropTypes.func.isRequired
};

export default Timer;
