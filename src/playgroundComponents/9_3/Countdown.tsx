import React, { FC, useEffect, useState } from "react"
import "./style.css"

const Timer: FC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit)
  const reset = () => setTimeLeft(limit)
  const tick = () => setTimeLeft((t) => t - 1)

  useEffect(() => {
    const timerId = setInterval(tick, 1000)

    return () => clearInterval(timerId)
  }, [])

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit)
  }, [timeLeft, limit])

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
          <button type="button" onClick={reset}> Reset </button>
        </div>
      </div>
    </div>
  )
}

export default Timer
