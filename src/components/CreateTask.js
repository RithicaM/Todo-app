import React, { Component } from 'react'

export default class CreateTask extends Component {
        constructor(props) {
            super(props);
            this.state={
                task:'',
            }
        };
        hanldeChange=(event)=>{
            this.setState({task: event.target.value});
        };
        hanldeSubmit=(event)=>{
            event.preventDefault();
            this.props.CreateTask(this.state.task);
            this.setState({task:''});
        }
        render() {
        return (
           <form onSubmit={this.hanldeSubmit}>
               <input type="text" placeholder="Enter Task" value={this.state.task} onChange={this.hanldeChange} autoFocus></input>
            <button className="add" stype="submit">Add</button>
           </form>
        )
    }
}