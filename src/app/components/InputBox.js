import React, { Component } from 'react';

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        //this.onChange = this.onChange.bind(this);
        this.submitToDo = this.submitToDo.bind(this);
        this.state = { 
            text: ''
        };
    }

    

    onChange = e => {
        //console.log(e.currentTarget.value);
        //this.state.text = '';
        this.setState({
            text: e.currentTarget.value
        });
    }

    submitToDo () {
        console.log('submit todo');
        this.props.onAdd(this.state.text);
    }

    render() {
        return (           
            <div style={{position: 'relative'}}>
                <input 
                    type="text"
                    value={this.state.text} 
                    onChange={this.onChange}
                    style={{width: '100%', padding: '10px 0px'}} />
                <button 
                    onClick={this.submitToDo}
                    style={{ position: 'absolute', right: 0, top: 0, padding: '10px 30px' }}>
                    +
                </button>
            </div>
        );
    }
}