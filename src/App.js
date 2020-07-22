import React, { Component } from "react";
import CustomForm from "./CustomForm";
import Message from "./Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
    };
  }

  isFormValid = (el) => {
    this.setState({ isFormValid: el });
  };

  render() {
    return (
      <div className="container">
        <CustomForm isFormValid={this.isFormValid} />
        <Message isFormValid={this.state.isFormValid} />
      </div>
    );
  }
}

export default App;
