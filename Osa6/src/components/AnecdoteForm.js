import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        dispatch(newAnecdote(content))
        dispatch(showNotification(content))
      }




    return (
        <div>
          <h2>create new</h2>
          <form onSubmit={addAnecdote}>
            <input name="content" /> 
            <button type="submit">add</button>
          </form>
        </div>
      )
}

export default AnecdoteForm