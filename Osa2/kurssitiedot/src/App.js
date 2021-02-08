import React from 'react'

const Course = (props) => {  return (
  <div>
    <Header name={props.course.name}/>
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </div>
)
}

const Header = (props) => {  return (
  <div>
    <p>{props.name}</p>    </div>
)
}

const Content  = (props) => {  return (
    <div>    
        {props.parts.map(parts => <Part name={parts.name} exercise={parts.exercises}/>)}      
    </div>
)
}

const Part  = (props) => {  return (
  <div>
    <p>{props.name} | Number of exercises: {props.exercise}</p>
  </div>
)
}

const Total = (props) => {  return (

  <div>
    <p>Total exercises: {props.parts.reduce((a, b) => a + b.exercises, 0)} </p>    
  </div>
)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App