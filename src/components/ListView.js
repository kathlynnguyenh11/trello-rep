import React from 'react';

import axios from 'axios';

class ListView extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          tasks: [],
          orderByOption : 'id',
          categoryOption: 'all'
      } 
      this.getData = this.getData.bind(this);
      this.handleChangeOrderBy = this.handleChangeOrderBy.bind(this);
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

  handleChangeOrderBy(event){
    this.setState({orderByOption: event.target.value});
  }

  handleChangeCategory(event){
    this.setState({categoryOption: event.target.value});
  }

  render(){
    return (
      <div className="page-two">
        <h2>Page 2: Can be shown through tabs</h2>
        <div class="filter-wrapper">
            <div className="form-group">
                <label for="orderBy">Order By</label>
                <select value={this.state.orderByOption} onChange={this.handleChangeOrderBy} name="orderBy">
                    <option value="" disabled selected hidden>Please choose</option>
                    <option value="title">Title</option>
                    <option value="_id">ID</option>
                </select>
            </div>
            <div className="form-group">
                <label for="category">Category</label>	
                <select value={this.state.categoryOption} onChange={this.handleChangeCategory} name="category">
                    <option value="" disabled selected hidden>Please choose</option>
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </div>
      </div>
    )
  }
}

export default ListView;

//        <List data={this.state.tasks} orderBy={this.state.orderByOption} category={this.state.categoryOption}/> 
