import React, { FC, useState } from "react"
import "./style.css"

const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const reset = () => setCount(0)
  const increment = () => setCount((c) => c + 1)

  return (
    <div className="container">
      <div className="container__result">
        <label>count</label>
        <div>{ count }</div>
      </div>
      <div className="container__control">
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  )
}

export default Counter
