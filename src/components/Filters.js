import React from 'react';

const Filters = () => {
    return(
        <div class="filter-wrapper">
            <div className="form-group">
                <label for="orderBy">Order By</label>
                <select id="orderBy" name="orderBy">
                    <option value="" disabled selected hidden>Please choose</option>
                    <option value="title">Title</option>
                    <option value="_id">ID</option>
                </select>
            </div>
            <div className="form-group">
                <label for="category">Category</label>	
                <select id="category" name="category">
                    <option value="" disabled selected hidden>Please choose</option>
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;