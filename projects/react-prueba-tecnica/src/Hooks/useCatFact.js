import { useState,useEffect } from "react"
import {getRandomFact} from '../services/facts.js'

export function useCatFact (){
    const [fact,setFact] = useState ()
    //guardamos el get randomfact en una const nueva para usarlo mas facilmente
    const getFactAndUpdateReactState =()=>{
        getRandomFact().then(newFact => setFact(newFact))
    }
    //Efecto para recuperar la cita al cargar la pagina
    useEffect(()=>{
        getFactAndUpdateReactState
    },[])
    /*Aqui el arreglo es asi para que no ejecute cada ves que renderize el
     componente si pusierael set fact cada ves que el fact cambie*/ 
    return {fact, getFactAndUpdateReactState}
}