import React, { Component } from 'react';

class CreateTodo extends Component{
    constructor(props) {
        super(props);

        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsilbe = this.onChangeTodoResponsilbe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            todo_title: '',
            todo_description: '',
            todo_responsibile: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoTitle(e) {
        this.setState({
            todo_title: e.target.value
        });
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsilbe(e) {
        this.setState({
            todo_responsibile: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted: `);
        console.log(`Todo Title: ${this.state.todo_title}`);
        console.log(`Todo Description: ${this.state.todo_responsible}`);
        console.log(`Todo Responsible: ${this.state.todo_responsibile}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);

        this.setState({
            todo_title: '',
            todo_description: '',
            todo_responsibile: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" value={this.state.todo_title} onChange={this.onChangeTodoTitle} />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" className="form-control" value={this.state.todo_description} onChange={this.onChangeTodoDescription} />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text" className="form-control" value={this.state.todo_responsibile} onChange={this.onChangeTodoResponsilbe} />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" 
                            type="radio" 
                            name="priorityOptions" 
                            id="priorityLow" 
                            value="Low" 
                            checked={this.state.todo_priority==='Low'} 
                            onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority}
                                />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateTodo;