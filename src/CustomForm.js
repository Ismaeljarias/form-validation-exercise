import React, { Component } from "react";
import {
  emailValidation,
  phoneValidation,
  urlValidation,
} from "./utils/customValidator";

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNameValid: false,
      isEmailValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      name: "",
      email: "",
      phone: "",
      url: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const clonedState = { ...this.state };

    clonedState.name !== "" &&
    clonedState.name.length >= 3 &&
    clonedState.name.length <= 25
      ? (clonedState.isNameValid = true)
      : (clonedState.isNameValid = false);

    clonedState.email !== "" && emailValidation(clonedState.email)
      ? (clonedState.isEmailValid = true)
      : (clonedState.isEmailValid = false);

    clonedState.phone !== "" && phoneValidation(clonedState.phone)
      ? (clonedState.isPhoneValid = true)
      : (clonedState.isPhoneValid = false);

    clonedState.url !== "" && urlValidation(clonedState.url)
      ? (clonedState.isUrlValid = true)
      : (clonedState.isUrlValid = false);

    this.setState({ ...clonedState });

    clonedState.isNameValid &&
    clonedState.isEmailValid &&
    clonedState.isPhoneValid &&
    clonedState.isUrlValid
      ? this.props.isFormValid(true)
      : this.props.isFormValid(false);
  };

  handleOnchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-sm-8 col-md-6 mx-auto">
          <h3 className="py-1">{/* <strong>Message</strong>: {message} */}</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h3>Name:</h3>
              <input
                name="name"
                type="name"
                className="form-control"
                onChange={this.handleOnchange}
              />
            </div>
            <div className="form-group">
              <h3>Email:</h3>
              <input
                name="email"
                type="text"
                className="form-control"
                onChange={this.handleOnchange}
              />
            </div>
            <div className="form-group">
              <h3>Phone:</h3>
              <input
                name="phone"
                type="text"
                className="form-control"
                onChange={this.handleOnchange}
              />
            </div>
            <div className="form-group">
              <h3>Url:</h3>
              <input
                name="url"
                type="text"
                className="form-control"
                onChange={this.handleOnchange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CustomForm;
