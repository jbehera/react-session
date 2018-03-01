import React, { Component } from 'react';
import ToDoList from './components/ToDoList';

export default class App extends Component {
    
    render() {
        return (
            <div style={Styles.App}>
                <h1>ToDo List</h1>
                <ToDoList />
            </div>
        )
    }
};

const Styles = {
    App: {
        width: '80%',
        margin: 'auto'
    }
};