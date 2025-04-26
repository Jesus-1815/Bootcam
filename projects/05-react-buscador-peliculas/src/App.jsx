import './App.css'
import { useRef } from 'react'
import {Movies} from './Components/Movies'
import { useMovies } from './hooks/useMovies'
function App() {
  const {movies}= useMovies()
  const inputRef = useRef()
  const handleSubmit = (event)=>{
    event.preventDefault()
    //Estas lineas de abajo lo que hacen es guardar la referencia del nombre del
    //  input asi podemos manejar los input sin abusar del inputRef
    const data = new FormData(event.target)
    const query = data.get('query')
    console.log(query)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input name='query' ref={inputRef} placeholder='Avengers,Star Wars, Matrix...'/> 
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
