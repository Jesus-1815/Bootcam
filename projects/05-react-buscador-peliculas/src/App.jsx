import './App.css'
import {Movies} from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const {query,setQuery,error} = useSearch()
  const {movies,loading,getMovies}= useMovies({query})
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='query'  placeholder='Avengers,Star Wars, Matrix...'/>
        <button  type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando....</p>: <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}
export default App
