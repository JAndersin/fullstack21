import React, { useState } from 'react'

const Statistics = (props) => {  
  if (props.goods > 0 || props.neutrals > 0 || props.bads > 0 ) {
    return (
    <div>
      <p>Good: {props.goods}</p>
      <p>Neutral: {props.neutrals}</p>
      <p>Bad: {props.bads}</p>
      <p>Average: {(props.goods*1+props.neutrals*0+props.bads*-1)/(props.goods+props.neutrals+props.bads)}</p>
      <p>Positive: {(props.goods*100)/(props.goods+props.neutrals+props.bads)}</p>
    </div>
    )

  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
      )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good+1)}>Good</button><button onClick={() => setNeutral(neutral+1)}>Neutral</button><button onClick={() => setBad(bad+1)}>Bad</button>
      <h1>Statistics</h1>
      <Statistics goods={good} neutrals={neutral} bads={bad} />
    </div>
  )
}

export default App