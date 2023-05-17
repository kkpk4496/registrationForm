import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameBlurStatus: false,
    lastNameBlurStatus: false,
    submitForm: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName.length === 0) {
      this.setState({firstNameBlurStatus: true})
    } else {
      this.setState({firstNameBlurStatus: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName.length === 0) {
      this.setState({lastNameBlurStatus: true})
    } else {
      this.setState({lastNameBlurStatus: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName.length !== 0 && lastName.length !== 0) {
      this.setState({submitForm: true})
    } else {
      this.setState({submitForm: false})
      this.onBlurFirstName()
      this.onBlurLastName()
    }
  }

  successForm = () => {
    this.setState({submitForm: false})
  }

  renderForSuccess() {
    return (
      <form>
        <div className="container">
          <h1 className="heading">Registration Form</h1>
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              className="successbtn"
              type="button"
              onClick={this.successForm}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </form>
    )
  }

  renderForSubmit() {
    const {
      firstName,
      lastName,
      firstNameBlurStatus,
      lastNameBlurStatus,
    } = this.state
    return (
      <form onSubmit={this.submitForm}>
        <div className="container">
          <h1 className="heading">Registration Form</h1>
          <div className="login-container">
            <label className="label" htmlFor="firstname">
              FIRST NAME
            </label>
            <input
              id="firstname"
              type="text"
              placeholder="First name"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {firstNameBlurStatus ? <p className="Blur">Required</p> : <br />}
            <label className="label" htmlFor="lastname">
              LAST NAME
            </label>
            <input
              id="lastname"
              type="text"
              placeholder="Last name"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {lastNameBlurStatus ? <p className="Blur">Required</p> : ''}
            <button className="submitbtn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }

  render() {
    const {submitForm} = this.state

    return (
      <div>{submitForm ? this.renderForSuccess() : this.renderForSubmit()}</div>
    )
  }
}

export default RegistrationForm
