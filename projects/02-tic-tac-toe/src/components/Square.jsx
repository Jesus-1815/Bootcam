//funcion que controla los click dy tiene las props de cada cuadron 
 export const Square =({children,isSelected,updateBoard,index})=>{
    //una clase parra de sir si esta seleccionado oh no 
    const className = `square ${isSelected ? 'is-selected' : ''}`
    // el handle click que trae las actualizasaciones del board con cada nuevo click 
    const handleClick = () =>{
      updateBoard(index)
    }
    return(
      // y retorna el dato de la casilla con el chlidren y 
      // tambien con el class name como props para saber si es click de x oh O
      <div onClick = {handleClick}className={className}>
        {children}
      </div>
    )
  }