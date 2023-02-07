import './index.css'

const VisitItem = props => {
  const {countriesDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countriesDetails

  const onClickButtonItem = () => {
    onClickVisitButton(id)
  }

  return (
    <li className="country-item">
      <div className="country-container">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="text">Visited</p>
        ) : (
          <button type="button" className="button" onClick={onClickButtonItem}>
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default VisitItem
