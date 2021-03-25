import React, { Component, ReactElement } from "react"
import "./style.css"

const LIMIT = 60

type State = {
  timeLeft: number;
}

class App extends Component<unknown, State> {
  timerId: NodeJS.Timer | null = null

  constructor(props: unknown) {
    super(props)
    this.state = { timeLeft: LIMIT }
  }

  reset = (): void => {
    this.setState({ timeLeft: LIMIT })
  }

  tick = (): void => {
    this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }))
  }

  componentDidMount = (): void => {
    // this.timerId = setInterval(this.tick, 1000)
  }

  componentDidUpdate = (): void => {
    const { timeLeft } = this.state
    if (timeLeft === 0) this.reset()
  }

  componentWillUnmount = (): void => {
    if (this.timerId) clearInterval(this.timerId)
  }

  render = (): ReactElement => {
    const { timeLeft } = this.state

    return (
      <div className="container">
        <h3>タイマー</h3>
        <div className="timer">
          <div className="timer__result">
            TIME
            <br />
            <span className="timer__result--time">{ timeLeft }</span>
          </div>
          <div className="control">
            <button type="button" onClick={this.reset}> Reset </button>
          </div>
        </div>
      </div>
    )
  }

}

export default App
