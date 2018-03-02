import React, { Component } from 'react';

export default class TaskDetails extends Component {
    
    constructor(props) {
        super(props);
        this.taskId = '';
    }

    componentWillMount() {
        this.taskId = this.props.match.params.taskId;
    }

    render() {
        return (
            <div>Details: taskId = {this.taskId}</div>
        )
    }
}