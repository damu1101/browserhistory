import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistoryItems extends Component {
  state = {
    s: '',
  }

  searchItem = event => {
    this.setState({s: event.target.value})
  }

  deleteItem = id => {
    console.log(id)
  }

  render() {
    const {s} = this.state
    const {HistoryList} = this.props

    const searchResults = HistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(s.toLowerCase()),
    )

    return (
      <div className="appContainer">
        <div className="navBar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            className="hImg"
            alt="app logo"
          />
          <div className="inputBar">
            <div className="searchIcon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search"
              />
            </div>

            <input
              type="search"
              placeholder="search history"
              value={s}
              className="inp"
              onChange={this.searchItem}
            />
          </div>
        </div>
        <ul className="unList">
          {searchResults.map(eachItem => (
            <HistoryItem
              Item={eachItem}
              deleteItem={this.deleteItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default HistoryItems
