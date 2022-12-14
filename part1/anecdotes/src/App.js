import { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
   
  const [selected, setSelected] = useState(0)

  const handleNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  
  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  const maxPoints = Math.max(...points)

  const maxPointsIndex = points.indexOf(maxPoints)
  
  return (
    <>
      <Header text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p><b>Points:</b> {points[selected]}</p>
      <Button handleClick={handleVote} text="vote"/>
      <Button handleClick={handleNextAnecdote} text="next anecdote" />
      
      <Header text="Anecdote with most votes" />
      <p>{anecdotes[maxPointsIndex]}</p>
      <p><b>Points:</b> {maxPoints}</p>
    </>
  )
}

export default App