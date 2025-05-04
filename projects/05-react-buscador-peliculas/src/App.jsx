import './App.css'
import { useEffect, useRef, useState } from 'react'
import {Movies} from './Components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const {movies}= useMovies()
  const inputRef = useRef()
  const[query,setQuery]=useState('')
  const[error,setError]=useState(null)

  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log({query})
  }

  const handleChange= (event) =>{
    const newQuery =event.target.value
    if (newQuery.startsWith(' '))return
    setQuery(newQuery)

    if(newQuery == (' ')){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (newQuery.match(/^\d+$/)){
      setError('No se puede buscar una pelicula solamente con un numero')
    return}
    if (newQuery.length < 3){
      setError('La busqueda debe tener almenos 3 caracrteres')
    return}
    setError(null)
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='query' ref={inputRef} placeholder='Avengers,Star Wars, Matrix...'/>
        <button  type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
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
