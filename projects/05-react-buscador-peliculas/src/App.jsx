import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ query, sort })

  const debounceGetMovies = useCallback(
    debounce((query) => {
      console.log('search', query)
      getMovies({ query })
    }, 2000),
    [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(newQuery)
    debounceGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name='query'
            placeholder='Avengers, Star Wars, Matrix...'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando....</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
