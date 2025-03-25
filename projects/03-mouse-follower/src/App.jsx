//estamos importando las librerias de useEffect y useState para usar
import { useEffect, useState } from "react"
 

const FollowMause  = ()=>{
  //declaracion de una estado
 const [position,setPosition] = useState({x: 0, y: 0})
 const [enabled,setEnabled] = useState(false)
  //asi se declara un efecto ("el estado cambia de estado un componente en especifico en este caso el button enable
  // y el efecto )
useEffect (()=>{
  console.log('effect', {enabled})

  const handleMove =(event)=>{
    const{clientX,clientY}= event
    console.log('handleMove',{clientX,clientY})
    setPosition({x: clientX , y: clientY})
  }
  // este es el evento que suscribe si se cumple el if si es enable osea activado entonces entra al evento pintermove.
  if (enabled){
    window.addEventListener('pointermove',handleMove)
  }
  // se retorna el evento con el remove para limpar el evento 
  return () =>{
    window.removeEventListener('pointermove',handleMove) // se puede saber que evento se esta suscribiendo con (getEventListeners(window)) en este caso
  }
},[enabled])

  return(
    <>
  <div style={{
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: '1px solid #fff',
    borderRadius: '50%',
    opacity: '0.8',
    pointerEvents: 'none',
    left: -20,
    top: -20,
    width: 40,
    height: 40,
    transform: `translate(${position.x}px,${position.y}px )`
  }}>

  </div>
<button onClick={()=>setEnabled(!enabled)}> 
  {enabled ? 'Desactivar' : 'Activar'}Activar seguir puntero
</button>
</>
  )
  
}
function App() {
  const [Mounted,setMounted] = useState(true)
  return (
    <main>
      {Mounted && <FollowMause/>}
      <button onClick={()=>setMounted(!Mounted)}>Desmontar el componente FollowMause</button>
    </main>
  )
}
export default App
