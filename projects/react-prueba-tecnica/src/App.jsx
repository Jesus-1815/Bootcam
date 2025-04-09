//En React, un fetching de datos se refiere 
// al proceso de obtener información desde una fuente externa, 
// como una API, base de datos o archivo, y luego mostrarla en la interfaz de usuario. 
// Esto suele realizarse usando métodos como fetch() o bibliotecas como axios para hacer solicitudes HTTP.
import { useEffect, useState } from "react"
import './App.css'
import { useCatFact } from "./Hooks/useCatFact.js"
import { useCatImage } from "./Hooks/useCatImage.js"
export function App(){
    //como es un custom hooks es como una caja negra que simplemente trae el url de la imagen lo traemos a function app
    const {fact,getFactAndUpdateReactState} = useCatFact()//este va primero porque el de image nececita la cita 
    const {imageUrl} = useCatImage({fact})
    const handleClick = ()=>{
        //llamamos ahora el get fact del customhooks 
       getFactAndUpdateReactState()
    }
    return(
        <main>
             <h1>Appp de gatos</h1>
             <button onClick={handleClick}>get new fact</button>
             <section>
             {fact &&<p>{fact}</p>} 
             {imageUrl && <img src = {imageUrl} alt={`imagen extraida de las 3 palabras de ${fact}`}/>}
             </section>
        </main>
    )
}