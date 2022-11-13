import { useState } from 'react';

const Header = ({ header }) => <h2>{header}</h2>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Stats = ({ statValue }) => <p>{statValue}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  

  return (
    <>
      <Header header="give feedback" />
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad" />
      
      <Header header="statistics" />
      <Stats statValue={good}/>
      <Stats statValue={neutral}/>
      <Stats statValue={bad}/>
    </>
  );
}
 
export default App;
