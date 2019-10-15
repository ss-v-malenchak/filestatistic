import React from 'react';

const Table = props => {
  console.log(props);
  return(
    <div className="table-field">
      <div className="table">
        <table>
          {props.columns.map(column => {
            return (<th><h1>{column.capitalize()}</h1></th>)
          })}

          {props.data.map(object => {
            return (
              <tr>
                {props.columns.map(column => (<td><h2>{object[column]}</h2></td>))}
              </tr>
            )})
          }
      </table>
      </div>
    </div>
  );
};

export default Table;
