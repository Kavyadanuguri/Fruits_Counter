// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}
  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }
  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="con1">
          <h1 className="heading">
            Bob ate<span className="s1">{mangoCount}</span>mangoes{' '}
            <span className="s1">{bananaCount}</span>
            bananas
          </h1>
          <div className="con2">
            <div>
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
              />
              <button className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
              />
              <button className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
