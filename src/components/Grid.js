import React from 'react';
import axios from 'axios';

import ItemCard from './GridItem';
import '../css/Grid.css';

let listType = {
    "todo": "To Do",
    "review": "Review",
    "in-progress" : "In Progress",
    "done": "Done"
}
class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        } 
        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
          .then(response => {
            this.setState({ tasks: response.data });
            console.log(this.state.tasks);
          }).catch(error => {
            this.setState({ errorMessage: error.message });
          });
    }

    componentDidMount() {
        this.getData();
    }
  
    render(){
        let taskList = [];
       
        taskList = this.state.tasks.filter((task)=> {
            return task.column === this.props.type;
        });
        let renderedList = taskList.map((item)=>{
            let itemInfo = {
                title: item.title,
                id: item.id
            };
            console.log("test");
            console.log(itemInfo);
            return <ItemCard info={itemInfo} key={itemInfo.id}/>
        })
        return (
            <div className="column">
                <div className="card-header">{listType[this.props.type]}</div>
                {renderedList}
            </div>
        )
    }
}
export default Grid;