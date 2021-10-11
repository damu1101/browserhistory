import './index.css'

const HistoryItem = props => {
  const {Item, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Item
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="bgcItem">
      <div className="nImg">
        <h1 className="time">{timeAccessed}</h1>
        <img src={logoUrl} className="logo" alt="app logo" />
        <h1 className="title">{title}</h1>
        <p className="sub">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
        className="del"
        alt="delete"
        onClick={onDelete}
      />
    </li>
  )
}

export default HistoryItem
