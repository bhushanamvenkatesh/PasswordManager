const PassWordItem = props => {
  const {eachPassword, show, deletePasswordItem} = props
  const {id, websitename, username, pin, color} = eachPassword
  const surname = username[0]
  console.log(show)

  const onDelteClick = () => {
    deletePasswordItem(id)
  }

  return (
    <li className="each-password">
      <div className="initial-details-container">
        <div className={`initial ${color}`}>
          <p>{surname}</p>
        </div>
        <div>
          <p>{websitename}</p>
          <p>{username}</p>
          {show ? (
            <p>{pin}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <div className="delete-img-container">
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={onDelteClick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PassWordItem
