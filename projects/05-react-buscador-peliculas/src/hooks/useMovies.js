import responseMovies from '../Mock/with-results.json'
//Esta funcion que contiene el mapepedMovies lo que hacemos es intancear los datos de la app a este componente
//para poder manejarlos nosotros mismos y no depender del contrato directo de la api
export function useMovies (){
    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster:movie.Poster
    }))
    return {movies:mappedMovies}
  }