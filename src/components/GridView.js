import React from 'react';

import Grid from './Grid';

class GridView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toDoList: []
    };
  }
  
  render(){
    return (
      <div className="page-one row" >
        <Grid className="column" type="todo"/>
        <Grid className="column" type="in-progress"/>
        <Grid className="column" type="review"/>
        <Grid className="column" type="done"/>
      </div>
    ) 
  }
}

export default GridView;