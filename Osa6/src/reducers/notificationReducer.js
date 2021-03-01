import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
    content: ''
}

const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
      case 'SHOW':
        return {
            ...state,
            content: action.content
        }
      default: return state
    }
  }

export const showNotification = (content) => {
    return {
        type: 'SHOW',
        content: content
      }
}

  export default notificationReducer