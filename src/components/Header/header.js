import React from 'react';
import './component.css';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 'red'
        };
    }
    render() {
       return (<div className = "back">Hello World!</div>)
    }
}

export default Component;