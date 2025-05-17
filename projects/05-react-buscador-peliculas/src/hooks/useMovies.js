import { useState } from 'react'
import { searchMovie } from '../services/movie'
//Esta funcion que contiene el mapepedMovies lo que hacemos es intancear los datos de la app a este componente
//para poder manejarlos nosotros mismos y no depender del contrato directo de la api
export function useMovies ({query}){
  const [movies,setMovie]= useState([])
  const [loading,setLoading]= useState([false])
  const [error,setError] = useState([null])
    const getMovies= async()=>{
      try{
        setLoading(true)
        setError(null)
        const newMovie = await searchMovie ({query})
        setMovie(newMovie)
      }catch(e){
        setError(e.message)
      }finally{
        setLoading(false)
      }
    }

    return {movies,loading,getMovies}
  }