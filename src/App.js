import './App.css';
import React, { useEffect, useReducer } from 'react';
import Form from './components/Form.js'
import Post from './components/Post.js'

function App() {

  const INITIAL_STATE = {
    search: "",
    error: false,
    isLoading: false
  }

  const postReducer = (state, action) => {
    if (action.type === "UPDATE_SEARCH") {
      return{
        search: action.payload,
        error: false,
        isLoading:true
      }
    } else {
      return state
    }
  }

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)
  console.log(state)

  const handleSubmit = (event) => {
  event.preventDefault();
  }

  const API_KEY = process.env.REACT_APP_API_KEY

  const handleChange = (event) => {
  console.log("hi")
  const newSearch = event.target.value
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${newSearch}&number=4`)
    .then(res => res.json())
    .then(data=> {
      console.log(data)
      dispatch({type: 'UPDATE_SEARCH',
      ...state, payload:data.results})
    })
    .catch(function (err) {
      console.error(err);
      })
  }


  return (
    <div className="App">
      {/* <Form state={state.search} dispatch = {dispatch} /> */}
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text"
        name="main-search"
        action="/"
        method="get"
        onChange ={handleChange}
        defaultValue={state.search || ''}
        />
        <button type="submit">Search</button>
      </form>
      </div>
      <Post state={state.search} />
    </div>
  );
}

export default App;
