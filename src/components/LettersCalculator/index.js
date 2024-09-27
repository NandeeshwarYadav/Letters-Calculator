// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  enterLetters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <form>
        <div className="bg">
          <div className="flex-row">
            <div>
              <h1 className="head">Calculate the Letters you enter</h1>
              <div className="input-container">
                <label htmlFor="inputValue">Enter the phrase</label>
                <input
                  type="text"
                  id="inputValue"
                  className="input"
                  onChange={this.enterLetters}
                />
              </div>
              <div className="card">
                <p>No.of letters: {count}</p>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                alt="letters calculator"
                className="img"
              />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default LettersCalculator
