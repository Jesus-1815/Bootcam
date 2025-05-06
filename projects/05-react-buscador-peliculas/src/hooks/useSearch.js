import { useEffect, useState } from 'react'
//esta funcion controla la logica de los errores evaluando el query que esta en el input
 export function useSearch(){
  const[query,setQuery]=useState('')
  const[error,setError]=useState(null)
  
  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película solamente con un número')
      return
    }
    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [query])
  return(query,setQuery,error)
}