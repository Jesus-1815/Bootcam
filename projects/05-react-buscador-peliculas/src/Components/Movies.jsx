
//esto es el listado que renderiza en la pagina aqui listamos todo 
export function ListOfMovies  ({movies}){
    return(
      <ul className="movies">
      {
        movies.map(movie=>(
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <h3>{movie.year}</h3>
            <img src={movie.poster} alt={movie.title}></img>
          </li>
        ))
      }
    </ul>
    )
  }
  //esto devuelve si no se econtro nada en la busqueda 
  export function NoMoviesResults (){
    return(
      <p>No se encontraron peliculas para esta busqueda</p>
    )
  }
  // esto de aqui es lo que renderisa en el main del app.jsx es el que renderiza los 2 componentes anteriores por eso
  // se hace la logica de movies?.length para saver si existe una busqueda 
 export  function Movies ({movies}){
    const hasMovies = movies?.length > 0
    return(
        hasMovies
        ?<ListOfMovies movies={movies}/>
        :<NoMoviesResults/>
    )
    
 }