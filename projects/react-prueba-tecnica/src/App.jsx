//En React, un fetching de datos se refiere 
// al proceso de obtener información desde una fuente externa, 
// como una API, base de datos o archivo, y luego mostrarla en la interfaz de usuario. 
// Esto suele realizarse usando métodos como fetch() o bibliotecas como axios para hacer solicitudes HTTP.
import { useEffect, useState } from "react"

export function App(){
    const [fact,setFact] = useState ('loremn ipsum cat fact whatever')
    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
        .then(res => res.jason())
    },[])
    return(
        <main>
             <h1>Appp de gatos</h1>
             <p>{fact}</p>
        </main>
    )
}