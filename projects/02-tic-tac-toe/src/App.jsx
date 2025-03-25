import { useState } from 'react';
import './index.css'
import confetti from 'canvas-confetti';
import {Square} from "./components/Square.jsx"
import{TURNS} from "./Const/constantes.jsx"
import { checkWinerFrom , checkEndGame} from './logic/bard.js';
import { WinerModal } from './components/winerModal.jsx';
//las constantes x y o
function App() {
  // el estado que controla el array que contiene los cuadrados
  const [board,setBoard] = useState (()=>{
    const boardFromStorage =window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage):
    Array(9).fill(null)
  }
  )
  // el estado que coontrola si es el turno de las X oh de O

  const [turn,setTurn]= useState(()=>{
    const turnFormStorage = window.localStorage.getItem('turn')
    return turnFormStorage ?? TURNS.X
  }

  )
  // es para sabeer el ganador el estado que lo controla
  const [winer,setWiner]  = useState(null)// null es un ganador y false un emmpate 
  
  const resetGame =()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)
    //esto se remueve para que cuando el boton de restet game sea ejecutado se no presente lo del local storage si no qeu remueva todo desde 0
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const updateBoard = (index)=>{
    // el if lo que hace es que si ya tiene algo en el cuadro que es el board no ingrese nada mas 
    // y ademas lo compara con winner para que ya no actualize el board cuando alguien gana
    if (board[index] || winer)return
    // actualiza el tablero 
    const newBoard = [...board]
    newBoard[index]=turn
    setBoard(newBoard)
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn',turn)
    //controla que encada interaccion se revise si ya hay un ganador oh no 
    const newWiner = checkWinerFrom(newBoard)
    if(newWiner){
      confetti()
      setWiner(newWiner)
    }else if (checkEndGame(newBoard))
      setWiner(false)
  }
  //todo este return retorna el titulo el section que contiene el mapeo del array para generar los cuadros
  //y los botones indicadorews de x y o para saber de quien es el turno 
  // y por cada interaccion despues del mapeo de los cuadrados 
  // returna el square que contiene el contenido de los cuadrados {children}
  // y por cada interaccion trae el update que actualiza el array completo por cada interaccion
  return (
    <main className='board'>
      <h1>TRES EN RAYA</h1>
      <button onClick={resetGame}>REINICAR EL JUEGO</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
    <WinerModal resetGame={resetGame} winer={winer}/>
    </main>
  );
}

export default App
