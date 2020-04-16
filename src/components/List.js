import React from 'react';

import axios from 'axios';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            listView : []
        };
        this.getData = this.getData.bind(this);
    }
    componentDidMount(){
        this.getData();
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
    render (){
        //Category
        let taskList = []
        taskList = this.state.tasks.filter((task)=> {
            if (this.props.category==="all"){
                return true;
            }
            else {
                return task.column === this.props.category;
            }
        });
        //Order 
        let categorizedList = taskList;
        if (this.props.orderBy==="title"){
            console.log("hello");
            taskList = categorizedList.sort(function (a, b) { 
                console.log(a);
                var nameA = a.title.toUpperCase(); 
				var nameB = b.title.toUpperCase(); 
				if (nameA < nameB) {
				    return -1;
				}
				else if (nameA > nameB) {
				    return 1;
                }
                else {
                    return 0;
                }
			}) 
        }
        else if (this.props.orderByOption==="id"){
            taskList = categorizedList.sort(function (a, b) { 
				return a["id"] - b["id"];
			});
        }
        let renderedList = taskList.map((item)=>{
            let listType = {
                "todo": "To Do",
                "review": "Review",
                "in-progress" : "In Progress",
                "done": "Done"
            }
            return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{listType[item.column]}</td>
                </tr>
            )
        })

        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Column</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </table>
        )        
    }
}

export default List;