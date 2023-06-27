import React from 'react'

export default function Form({state, dispatch}){
const handleSubmit = (event) => {
event.preventDefault();
}

const API_KEY = process.env.REACT_APP_API_KEY

const handleChange = (event) => {
const newSearch = event.target.value
fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${newSearch}`)
  .then(res => res.json())
  .then(data=> {
    console.log(data)
    dispatch({type: 'UPDATE_SEARCH', payload:data})
  })
  .catch(function (err) {
      console.error(err);
    })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="main-search"
        action="/"
        method="get"
        onChange ={handleChange}
        value= {state.search || ''}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
