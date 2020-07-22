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

    this.state.name !== "" &&
    this.state.name.length > 3 &&
    this.state.name.length <= 25
      ? this.setState({ isNameValid: true })
      : this.setState({ isNameValid: false });

    this.state.email !== "" && emailValidation(this.state.email)
      ? this.setState({ isEmailValid: true })
      : this.setState({ isEmailValid: false });

    this.state.phone !== "" && phoneValidation(this.state.phone)
      ? this.setState({ isPhoneValid: true })
      : this.setState({ isPhoneValid: false });

    this.state.url !== "" && urlValidation(this.state.url)
      ? this.setState({ isUrlValid: true })
      : this.setState({ isUrlValid: false });
  };

  validation = () => {
    if (
      this.state.isNameValid &&
      this.state.isEmailValid &&
      this.state.isPhoneValid &&
      this.state.isUrlValid
    ) {
      return this.props.isFormValid(true);
    } else {
      return this.props.isFormValid(false);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      this.validation();
    }
  }

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
