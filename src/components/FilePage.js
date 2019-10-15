import React, { useState } from 'react';
import Filters from './Filters';
import Table from './Table';

const FilePage = () => {
  const [state, setState] = useState({
    data: [
      {'surname': 'Surname1', 'name': 'Name1', 'age': 17},
      {'surname': 'Surname1', 'name': 'Name2', 'age': 35},
      {'surname': 'Surname2', 'name': 'Name1', 'age': 18},
      {'surname': 'Surname3', 'name': 'Name3', 'age': 42},
      {'surname': 'Surname4', 'name': 'Name3', 'age': 23},
      {'surname': 'Surname1', 'name': 'Name2', 'age': 35},
      {'surname': 'Surname2', 'name': 'Name1', 'age': 18},
      {'surname': 'Surname3', 'name': 'Name3', 'age': 42},
      {'surname': 'Surname4', 'name': 'Name3', 'age': 23},
      {'surname': 'Surname1', 'name': 'Name2', 'age': 35},
      {'surname': 'Surname2', 'name': 'Name1', 'age': 18},
      {'surname': 'Surname3', 'name': 'Name3', 'age': 42},
      {'surname': 'Surname4', 'name': 'Name3', 'age': 23},
      {'surname': 'Surname1', 'name': 'Name2', 'age': 35},
      {'surname': 'Surname2', 'name': 'Name1', 'age': 18},
      {'surname': 'Surname3', 'name': 'Name3', 'age': 42},
      {'surname': 'Surname4', 'name': 'Name3', 'age': 23},
      {'surname': 'Surname1', 'name': 'Name2', 'age': 35},
      {'surname': 'Surname2', 'name': 'Name1', 'age': 18},
      {'surname': 'Surname3', 'name': 'Name3', 'age': 42},
      {'surname': 'Surname4', 'name': 'Name3', 'age': 23},
    ]
  })

  const columns = [...new Set(...state.data.map(object => Object.keys(object)))];
  const uniqueData = [...columns.map(column => {
    return {name: column, values: [...new Set(state.data.map(object => object[column]))]};
  })];

  return(
    <div id="file-page">
      <Filters data={uniqueData} />
      <Table columns={columns} data={state.data} />
    </div>
  );
};

export default FilePage;
