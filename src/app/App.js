import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import HomePage from './components/HomePage';
import TaskDetails from './components/TaskDetails';

export default class App extends Component {
    
    render() {
        return (
            <div style={Styles.App}>
               <Switch>
                   <Route exact path="/" component={HomePage} />
                   <Route exact path="/todo" component={ToDoList} />
                   <Route exact path="/todo/:taskId" component={TaskDetails}/>
                </Switch> 
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