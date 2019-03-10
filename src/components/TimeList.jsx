import React from "react";
import PropTypes from "prop-types";

const TimeList = ({ recordedTimes }) => {
  return (
    <section>
      <ul>
        {recordedTimes.map((time, index) => {
          return <li key={index}>{`${time.toFixed(2)} s`}</li>;
        })}
      </ul>
    </section>
  );
};

TimeList.propTypes = {
  recordedTimes: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default TimeList;
