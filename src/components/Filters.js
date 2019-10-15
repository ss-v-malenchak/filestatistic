import React from 'react';
import Accordion from './Accordion';
import RangeSelector from './RangeSelector'

const Filters = props => {
  return (<div className="filters">
    <div className="filters-field">
      <h2>Filters</h2>
      <RangeSelector />
      <Accordion data={props.data} />
      <div className='filter-page-buttons'>
        <button className="filter-button">
          <p>Filter data</p>
        </button>
        <button className="download-file">
          <p>Download file</p>
        </button>
      </div>
    </div>
  </div>);
};

export default Filters;
