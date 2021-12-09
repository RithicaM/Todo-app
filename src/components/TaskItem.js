import React, { Component } from 'react'

export default class TaskItem extends Component {
    constructor(props){
        super(props);
        this.state={
            task:this.props.taskItem.task,
            isEditing:false,
        };

    }
    setEditingState=(isEditing)=>{
        this.setState({isEditing:isEditing});
    }
    tggleTask=()=>{
        this.props.toggleTask(this.props.id);
    }
    deleteTask=()=>{
        this.props.deleteTask(this.props.id);
    }
    handleChange=(event)=>{
        this.setState({task:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.editTask(this.props.id ,this.state.task);
        this.setState({isEditing:false});
    }
    render() {
        return (
            <tr>
                {this.state.isEditing?
                <>
                <td>
                    <form>
                        <input value={this.state.task} onChange={this.handleChange} onSubmit={this.handleSubmit}autoFocus>
                        </input>
                    </form>
                </td>
                <button type="submit" onClick={this.handleSubmit} className="save">Save</button>
                <button onClick={()=>this.setEditingState(false)}type="button" className="back" >Back</button>
                </>
                :
                <>
                <td className="task" onClick={this.tggleTask}>
                    <input type="checkbox" readOnly checked={this.props.taskItem.isCompleted}/>
                <span className={this.props.taskItem.isCompleted?'Completed':'Not-Completed'}>
                 {this.props.taskItem.task}
                 </span>
                </td>
                <td>
                <button onClick={()=>this.setEditingState(true)} className="edit">Edit</button>
                <button onClick={this.deleteTask} className="delete">Delete</button>
                </td>
                </>
                  }
               
            </tr>
        );
    }
}