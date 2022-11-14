import { useState } from 'react'

const Header = ({ header }) => <h2>{header}</h2>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)


const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ values }) => {
  if (values.goodVal > 0 ||
    values.neutralVal > 0 ||
    values.badVal > 0) {
      return (
        <>
          <table>
            <tbody>
              <StatisticLine text={values.goodStr} value={values.goodVal}/>
              <StatisticLine text={values.neutralStr} value={values.neutralVal}/>
              <StatisticLine text={values.badStr} value={values.badVal}/>
              <StatisticLine text={values.allStr} value={values.goodVal + values.neutralVal + values.badVal}/>
              <StatisticLine text={values.avgStr} value={(values.goodVal - values.badVal) / 10}/>
              <StatisticLine text={values.percentStr} value={values.goodVal / (values.badVal + values.neutralVal + values.goodVal) * 100}/>
            </tbody>
          </table>
        </>
      )
  }
  return (
    <p>No feedback given</p>
  )
} 

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

  const values = {
    goodStr: 'good',
    neutralStr: 'neutral',
    badStr: 'bad',
    allStr: 'all',
    avgStr: 'averages score',
    percentStr: 'positive feedback, %',
    goodVal: good,
    neutralVal: neutral,
    badVal: bad
  }
  

  return (
    <>
      <Header header="give feedback"/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      
      <Header header="statistics"/>
      <Statistics values={values}
     />
      
    </>
  );
}
 
export default App;
