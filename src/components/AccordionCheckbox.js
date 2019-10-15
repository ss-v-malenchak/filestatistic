import React, {useState} from 'react';


const AccordionCheckbox = props => {

  const [state, setState] = useState({
    activated: false
  })

  const changeCheckboxStatus = event => {
    setState({activated: !state.activated})
  }


  if (props.status) {
    return (
      <div className="accordion-checkbox">
        {props.data.values.map(value => {
          return (
            <div>
              <input type="checkbox" name={props.data.name}
                className={`checkbox-button-${props.data.name}`}
              onClick={changeCheckboxStatus} defaultChecked={state.checked}/>
              <label for={props.data.name}>
                {value}
              </label>
          </div>
        );
        })}
      </div>
    );
  }
  else {
    return (
      <div className="accordion-checkbox"></div>
    );
  }


};

export default AccordionCheckbox;
