import { useState,useEffect} from "react"
//La diferencia entre un customhooks  y una function normal es que en el customhoosk puedes usar otros hoosk de react
//como por ejemplo el usesatstate y demas mas en una function no
// creacion dee un custom hooks: crear una funcion que empieze con use ok dentro lolevaria la logica de la imagen
// por ende primeramente el estado de la imagen y tambien el efecto aque contiene la logica que devuelve la imagen
// como necesita el fact ahi que pasarle como parametro el fact
export function useCatImage({fact}){
    const [imageUrl,setImageUrl]= useState ()
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
//como necesitamos que retorne algo el customhooks le decimos que retorne en este caso el imageurl
return {imageUrl}
}