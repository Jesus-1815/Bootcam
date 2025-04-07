//En React, un fetching de datos se refiere 
// al proceso de obtener información desde una fuente externa, 
// como una API, base de datos o archivo, y luego mostrarla en la interfaz de usuario. 
// Esto suele realizarse usando métodos como fetch() o bibliotecas como axios para hacer solicitudes HTTP.
import { useEffect, useState } from "react"
import './App.css'
import {getRandomFact} from './services/facts.js'
export function App(){
    const [fact,setFact] = useState ()
    const [imageUrl,setImageUrl]= useState ()
    //Efecto para recuperar la cita al cargar la pagina
    useEffect(()=>{getRandomFact().then(newFact => setFact(newFact))},[])/*Aqui el arreglo es asi para que no ejecute cada ves que renderize el componente si pusierael set fact cada ves que el fact cambie*/ 
    //para recuperar la imagen cada ves que tenemos una cita nueva
    useEffect (()=>{
        if(!fact)return
        const threefirstWord =  fact.split(' ',3)
        console.log(threefirstWord);
        fetch(`https://cataas.com/cat/says/${threefirstWord}?fontSize=50&fontColor=red&json=true`)
        .then(res =>res.json())
        .then(response =>{
            const {url} = response
            setImageUrl(url)
        })  
    },[fact])
    const handleClick = ()=>{
       getRandomFact().then(newFact => setFact(newFact))
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