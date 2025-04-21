import './App.css'
import responseMovies from './Mock/with-results.json'
import WithoutResults from './Mock/no-results.json'
import {Movies} from './Components/Movies'
function App() {
  const movies = responseMovies.Search
  const mappedMovies = movies?.map(movie =>({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster:movie.Poster
  }))
  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
      <form className='form'>
        <input placeholder='Avengers,Star Wars, Matrix...'/> 
        <button type='submit'>Buscar</button>
      </form>
      </header>

      <main>
        {
         <Movies movies={mappedMovies}/>
        }
      </main>
    </div>
  )
}
export default App
