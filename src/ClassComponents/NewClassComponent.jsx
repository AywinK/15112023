import React, { Component } from "react";

class NewClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello",
        }
    }

    handleClick = () => {
        this.setState({ message: "Clicked button" });
    };

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default NewClassComponent;