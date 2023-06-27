import './App.css';
import React, { useEffect, useReducer } from 'react';
import Form from './components/Form.js'
import Post from './components/Post.js'
import axios from 'axios'

function App() {

  const INITIAL_STATE = {
    search: '',
    error: false,
    isLoading: false
  }

  const postReducer = (state, action) => {
    if (action.type ==="UPDATE_SEARCH") {
      return{
        ...state,
        search: action.playload,
      }
    } else {
      return state
    }
  }

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)


  useEffect(() => {

  })

  return (
    <div className="App">
      <Form state={state} dispatch = {dispatch} />
      <Post state={state} />
    </div>
  );
}

export default App;
