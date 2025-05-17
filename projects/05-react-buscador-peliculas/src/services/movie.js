const APPY_KEY = '4287ad07'
export const searchMovie = async ({query})=>{
    if (query == '') return null
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${APPY_KEY}&s=${query}`) 
        const json = await response.json()
        const movies = json.Search

    return movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster:movie.Poster
    }))
    }
    catch(e){
        throw new Error("Error al buscar la pelicula");
        
    }
}