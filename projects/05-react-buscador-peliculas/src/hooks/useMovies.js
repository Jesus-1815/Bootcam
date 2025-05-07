import { useState } from 'react'
import withResults from '../Mock/with-results.json'
import wihoutResults from '../Mock/no-results.json'
//Esta funcion que contiene el mapepedMovies lo que hacemos es intancear los datos de la app a este componente
//para poder manejarlos nosotros mismos y no depender del contrato directo de la api
export function useMovies ({query}){
  const [responseMovies,setResponseMovies]= useState([])
    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster:movie.Poster
    }))

    const getMovies=()=>{
      if (query){
        fetch(`https://www.omdbapi.com/?apikey=287ad07`)
      }else{
        setResponseMovies(wihoutResults)
      }
    }

    return {movies:mappedMovies,getMovies}
  }