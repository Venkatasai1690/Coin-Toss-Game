// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {resultImage: HEADS_IMG_URL, headsCount: 0, tailsCount: 0}

  onClickTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    console.log(toss)

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      resultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  getTotalTosses = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {resultImage, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalTosses()
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="toss-image" src={resultImage} alt="toss result" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{totalCount}</p>
            <p className="result">Heads:{headsCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
