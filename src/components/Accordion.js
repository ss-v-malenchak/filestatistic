import React from 'react';
import AccordionButton from './AccordionButton';

const Accordion = props => {

  return (
    <div className="accordion-field">
      <p>Choose options you need..</p>
      <div className="accordion">
          {props.data.map(filter => {
            return <AccordionButton filter={filter} /> })}
      </div>
    </div>

  );
};

export default Accordion;
