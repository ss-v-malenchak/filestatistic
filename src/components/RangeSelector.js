import React, { useState } from 'react';

const RangeSelector = () => {
  const [state, setState] = useState({
    min: 1,
    max: 50,
    value: 1
  });

  const rangeValue = event => {
    setState({min: state.min, max: state.max, value: event.target.value})
  };

  return (
    <div className="count-selector">
      <p>How many items do you want to get?</p>
      <label for="range">
        <input type="range" id="range" min={state.min} max={state.max} step="1"
          value={state.value} onChange={rangeValue}/>
      </label>
      <output for="range" class="output">{state.value}</output>
    </div>
    );
};

export default RangeSelector;
