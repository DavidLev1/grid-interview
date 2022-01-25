import React from 'react';


const Grid = ({ config, data }) => {
  let index = 0;

  const elements = data.map(item => {
    let title;
    let field;
    let component;
    let elemRows = [];
    
    config.forEach(i => {
      title = i.title;

      field = item[i.field];
      if(typeof field === 'object') field = JSON.stringify(field);

      if(i.component) component = i.component;
      elemRows.push({ title, field, component});
    })

    const element = elemRows.map(row => {
      index++;
    
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.field}</td>
          <td>{row.component}</td>
        </tr> 
      )  
    })

    return (
      <>{element}</> 
    )
  });

  return (
    <table>
      <thead>
      <tr>
        <th>Title</th>
        <th>Field</th>
        <th>Component</th>
      </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
    
  )
};

export default Grid;