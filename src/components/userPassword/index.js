import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../passwordItem'

import './index.css'

class UserInput extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    passwordsList: [],
    isPasswordVisible: false,
  }

  onDeleteItem = id => {
    const {passwordsList} = this.state
    const tempList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: tempList})
  }

  changeVisibleStatus = () => {
    this.setState(preState => ({
      isPasswordVisible: !preState.isPasswordVisible,
    }))
  }

  addIntoPasswordList = () => {
    const {website, userName, password} = this.state
    const newPasswordItem = {
      id: uuidv4(),
      website,
      userName,
      password,
    }
    this.setState(preState => ({
      searchInput: '',
      passwordsList: [...preState.passwordsList, newPasswordItem],
      website: '',
      userName: '',
      password: '',
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      passwordsList,
      website,
      userName,
      password,
      isPasswordVisible,
      searchInput,
    } = this.state
    const sortedList = passwordsList.filter(eachItem =>
      eachItem.website.toUpperCase().includes(searchInput.toUpperCase()),
    )
    let noPasswords
    if (sortedList.length === 0) {
      noPasswords = true
    } else {
      noPasswords = false
    }
    return (
      <div className="backgroundContainer">
        <img
          className="passwordManagerIcon"
          src=" https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="topContainer">
          <img
            className="managerImage"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <form
            onSubmit={this.onAddPassword}
            className="passwordInputContainer"
          >
            <h1 className="addPasswordHeading">Add New password</h1>
            <div className="logoInputContainer">
              <img
                className="logoImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                value={website}
                onChange={this.onChangeWebsite}
                className="inputUser"
                placeholder="Enter Website"
                type="text"
              />
            </div>
            <div className="logoInputContainer">
              <img
                className="logoImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                value={userName}
                onChange={this.changeUserName}
                className="inputUser"
                placeholder="Enter Username"
                type="text"
              />
            </div>
            <div className="logoInputContainer">
              <img
                className="logoImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                value={password}
                onChange={this.onChangePassword}
                className="inputUser"
                placeholder="Enter Password"
                type="password"
              />
            </div>
            <div className="buttonContainer">
              <button
                onClick={this.addIntoPasswordList}
                className="button"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="bottomContainer">
          <div className="passwordsHeader">
            <div className="yourPassword">
              <h1 className="passwordYourHeading">Your Passwords</h1>
              <p className="countPasswords">{passwordsList.length}</p>
            </div>
            <div className="yourPassword3">
              <img
                className="searchIcon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                onChange={this.onChangeSearchInput}
                className="searchInputText"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="yourPassword1">
            <input
              id="showPassword"
              onClick={this.changeVisibleStatus}
              className="showPassword"
              type="checkbox"
            />
            <label htmlFor="showPassword" className="showPassword1">
              Show Passwords
            </label>
          </div>
          {noPasswords ? (
            <div className="noPasswordContainer">
              <img
                className="noPasswordsImage"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="orderListContainer">
              {sortedList.map(eachItem => (
                <PasswordItem
                  onDeleteItem={this.onDeleteItem}
                  isPasswordVisible={isPasswordVisible}
                  details={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default UserInput
