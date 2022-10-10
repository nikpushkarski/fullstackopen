const Hello = (props) => { 
  return (
    <div>
      <p>Hello {props.name}, you're {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='George' age={20+10} />
      <Hello name='Daisy' age={age}/>
      <Hello />
    </>
  )
}

export default App;