import React, { Component } from 'react';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.loadToDo = this.loadToDo.bind(this);
    }

    loadToDo(e) {
        this.props.history.push('/todo');
        e.preventDefault();
        
    }

    render () {
        return (
            <div>
                <h1>My Home page</h1>
                <a href="" onClick={this.loadToDo}>ToDo List</a>
            </div>
        );
    }
}