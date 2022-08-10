import {Component} from 'react'
import {v4 as uid} from 'uuid'
import './App.css'
import './index.css'
import PassWordItem from './Components/PassWordItem/index'

const bgcolors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
]

class App extends Component {
  state = {
    userName: '',
    password: '',
    webSite: '',
    passWordsList: [],
    searchInput: '',
    show: false,
  }

  deletePasswordItem = id => {
    const {passWordsList} = this.state
    const remainingList = passWordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passWordsList: [...remainingList]})
  }

  addPasswords = () => {
    const {passWordsList, show} = this.state
    return (
      <ul className="list">
        {passWordsList.map(eachPassword => (
          <PassWordItem
            eachPassword={eachPassword}
            key={eachPassword.id}
            show={show}
            deletePasswordItem={this.deletePasswordItem}
          />
        ))}
      </ul>
    )
  }

  noPassWords = () => (
    <div className="no-password-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="noPasswords-image"
      />
      <p>No Passwords</p>
    </div>
  )

  onClickAdd = event => {
    event.preventDefault()
    const {userName, password, webSite} = this.state

    const randomNo = Math.ceil(Math.random() * 10)
    const color = `initial ${bgcolors[randomNo]}`

    const newDetails = {
      id: uid(),
      websitename: webSite,
      username: userName,
      pin: password,
      color,
    }

    this.setState(prevstate => ({
      passWordsList: [...prevstate.passWordsList, newDetails],
      userName: '',
      password: '',
      webSite: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({webSite: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearch = event => {
    const {passWordsList, searchInput} = this.state
    this.setState({searchInput: event.target.value})

    const filteredList = passWordsList.filter(eachpassword =>
      eachpassword.websitename
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    this.setState({passWordsList: filteredList})
  }

  onChangeShow = event => {
    const showpassword = event.target.checked
    if (showpassword) {
      this.setState(prevstate => ({show: !prevstate.show}))
    }
  }

  render() {
    const {userName, password, webSite, passWordsList} = this.state
    const listLength = passWordsList.length

    return (
      <div className="app-container">
        <div className="containers">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-image"
          />
          <div className="top-section">
            <form className="myform" onSubmit={this.onClickAdd}>
              <h1>Add New Password </h1>
              <div className="each-input-field">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-image"
                />

                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={webSite}
                />
              </div>

              <div className="each-input-field">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-image"
                />

                <input
                  type="text"
                  className="input"
                  placeholder="Enter UserName"
                  onChange={this.onChangeUsername}
                  value={userName}
                />
              </div>

              <div className="each-input-field">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-image"
                />

                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>

              <div className="btn-container">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="password-manager"
            />
          </div>
          <div className="bottom-section">
            <div className="count-search-container">
              <div>
                <h1>
                  Your Passwords <p>{listLength}</p>
                </h1>
              </div>

              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-image"
                />
                <input
                  type="search"
                  className="search-input"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                type="checkbox"
                className="check-box"
                onChange={this.onChangeShow}
                id="showpassword"
              />
              <label htmlFor="showpassword">Show Passwords</label>
            </div>
            <div>
              {listLength > 0 ? this.addPasswords() : this.noPassWords()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
