// Write your code here

import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-con">
        <div className="content-con">
          <h1>Destination Search</h1>
          <div className="input-con">
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="Search"
            />
          </div>
          <ul>
            {searchResult.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationalDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
