import './index.css'

const PasswordItem = props => {
  const {details, isPasswordVisible, onDeleteItem} = props
  const {id, website, userName, password} = details

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="listItemContainer">
      <p className="firstName">{website.slice(0, 1).toUpperCase()}</p>
      <div>
        <p>{website}</p>
        <p>{userName}</p>
        {isPasswordVisible ? (
          <p>{password}</p>
        ) : (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        data-testid="delete"
        onClick={deleteItem}
        className="deleteButton"
        type="button"
      >
        <img
          className="deleteImage"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
