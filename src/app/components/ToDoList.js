import React, { Component } from 'react';
import InputBox from './InputBox';
import List from './List';

export default class ToDoList extends Component {
    
    constructor(props) {
        super(props);
        this.onTaskAdd = this.onTaskAdd.bind(this);
        this.state = {
            tasks: ['a']
        }
    }
    
    onTaskAdd(text) {
        console.log(text);
        this.setState((prevState) => ({
            tasks : [...prevState.tasks, text]
        }));
    }

    showDetails = (url) => {
        this.props.history.push(url);
    }

    render() {
        return (
            <div>
                <InputBox onAdd={this.onTaskAdd} />
                <List tasks={this.state.tasks} onDetail={this.showDetails} />
            </div>
        )
    }
}


