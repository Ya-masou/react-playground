import React, { Component, ReactElement } from "react"
import "./style.css"

type State = {
  count: number;
}

class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props)
    this.state = { count: 0 }
  }

  reset(): void {
    this.setState({ count: 0 })
  }

  increment(): void {
    this.setState(state => ({ count: state.count + 1 }))
  }

  // アロー関数にすることで this の参照先を固定して
  // コンポーネントの呼び出し側で property を参照して動作することも可能
  // ```
  // increment = (): void => {
  //   this.setState(state => ({ count: state.count + 1 }))
  // }
  //
  // // button
  // <button type="button" onClick={this.increment}> +1 </button>
  // ```

  render(): ReactElement {
    const { count } = this.state

    return (
      <div className="container">
        <h3>カウンター</h3>
        <div className="counter">
          <div className="counter__result">
            カウント
            <br />
            <span className="counter__result--count">{ count }</span>
          </div>
          <div className="counter__control">
            <div>
              <button type="button" onClick={() => this.reset()}> Reset </button>
            </div>
            <div>
              <button type="button" onClick={() => this.increment()}> +1 </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
