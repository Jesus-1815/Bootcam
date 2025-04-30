import './App.css'
import { useRef, useState } from 'react'
import {Movies} from './Components/Movies'
import { useMovies } from './hooks/useMovies'
function App() {
  const {movies}= useMovies()
  const inputRef = useRef()
  const[query,setQuery]=useState('')
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log({query})
  }

  const handleChange= (event) =>{
    setQuery(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='query' ref={inputRef} placeholder='Avengers,Star Wars, Matrix...'/>
        <button  type='submit'>Buscar</button>
      </form>
      </header>

      <main>
        {
         <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}
export default App
