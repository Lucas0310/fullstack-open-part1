import React, { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodFeedback = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button text="good" handler={handleGoodFeedback}></Button>
      <Button text="neutral" handler={handleNeutralFeedback}></Button>
      <Button text="bad" handler={handleBadFeedback}></Button>
      <h3>statistics</h3>
      <Statistics stats={[good, neutral, bad, total, average]}></Statistics>
    </div>
  )
}

export default App