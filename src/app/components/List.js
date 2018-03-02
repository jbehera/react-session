import React, { Component } from 'react';

export default class ToDoList extends Component {
    
    constructor(props) {
        super(props);
        this.renderTask = this.renderTask.bind(this);
        this.showDetails = this.showDetails.bind(this);
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    showDetails(e) {
        let task = e.currentTarget.dataset.id;
        // return (
        //     <TaskDetails taskId={task} />
        // )
        let url = `/todo/${task}`; 
        this.props.onDetail(url);
    }
    
    renderTask(task, index) {
        return (
            <div key={index}>
                {task}
                <button data-id={task} onClick={this.showDetails}>Details</button>
            </div>
        )
    }

    render() {
        const tasks = this.props.tasks;
        console.log(tasks);
        return (
            <div>
                <h3>Tasks list</h3>
                {
                    tasks.map((task, index) => this.renderTask(task, index))
                }                
            </div>
        )
    }
}


