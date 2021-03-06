import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const anecdoteClickHandler = () => {

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }

    const anecdoteIndex = getRandomInt(anecdotes.length - 1)

    setSelected(anecdoteIndex)
  }

  const pointsClickHandler = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const mostVotedAnecdoteIndex = points.indexOf(Math.max(...points))
  
  return (
    <div>
      <h3>Anecdotes of the day</h3>
      {anecdotes[selected]}
      <div>
        <button onClick={anecdoteClickHandler}>Next anecdote</button>
        <button onClick={pointsClickHandler}>Vote</button>
      </div>
      <div>
        <h3>Anecdote with most votes</h3>
        {anecdotes[mostVotedAnecdoteIndex]}
      </div>
    </div>
  )
}

export default App