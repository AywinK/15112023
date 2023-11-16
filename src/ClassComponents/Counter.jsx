import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    handleDecClick = () => {
        this.setState(state => state.count--);
    }

    handleIncClick = () => {
        this.setState(state => state.count++);
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleDecClick}>Dec -</button>
                <button onClick={this.handleIncClick}>Inc +</button>
            </div>
        )
    }
}

export default Counter;