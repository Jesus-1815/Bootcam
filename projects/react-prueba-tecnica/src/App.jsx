//En React, un fetching de datos se refiere 
// al proceso de obtener información desde una fuente externa, 
// como una API, base de datos o archivo, y luego mostrarla en la interfaz de usuario. 
// Esto suele realizarse usando métodos como fetch() o bibliotecas como axios para hacer solicitudes HTTP.
import { useEffect, useState } from "react"

export function App(){
    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    const [fact,setFact] = useState ()
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data=> setFact(data.fact))
    },[])
    return(
        <main>
             <h1>Appp de gatos</h1>
             {fact &&<p>{fact}</p>} 
        </main>
    )
}