import './index.css'

const CountryImageItem = props => {
  const {imageDetails, removeItem} = props
  const {id, name, imageUrl} = imageDetails

  const onClickRemoveButton = () => {
    removeItem(id)
  }

  return (
    <li className="image-item">
      <div className="image-container">
        <img src={imageUrl} className="image" alt="thumbnail" />
        <div className="name-button-container">
          <p className="country-name">{name}</p>
          <button
            type="button"
            className="remove-button"
            onClick={onClickRemoveButton}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default CountryImageItem
