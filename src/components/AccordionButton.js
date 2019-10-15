import React, { useState } from 'react';
import AccordionCheckbox from './AccordionCheckbox'


const AccordionButton = props => {
  const [state, setState] = useState({
    activated: false
  });
  const openButton = event => {
    setState({activated: !state.activated})
  }

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

  return (
    <div className="accordion-button">
      <button onClick={openButton}>
        <p>
          {props.filter.name.toLowerCase().capitalize()}
        </p>
    </button>
    <AccordionCheckbox data={props.filter} status={state.activated} />
    </div>
  );
};

export default AccordionButton;
