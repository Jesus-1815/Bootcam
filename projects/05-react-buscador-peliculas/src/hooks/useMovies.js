import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovie } from '../services/movie'

export function useMovies({ query, sort }) {
  const [rawMovies, setRawMovies] = useState([]) // aquí guardas las pelis originales
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(query)

  const getMovies = useCallback(async () => {
    if (query === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = query
      const newMovies = await searchMovie({ query })
      setRawMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [query])



const sortedMovies =useMemo(()=>{ 
  return sort 
  ? [...rawMovies].sort((a, b) => a.title.localeCompare(b.title))
  : rawMovies
},[sort, rawMovies])
 return { movies: sortedMovies, loading, getMovies, error }
}

//recuerda que las funciones se renderisan en el caso de los hooks es diferentes porque tienen sus reglas
 