 import { combosWiner } from "../Const/constantes";
// etsa funcion cheequea quien gano lo que hace esque con el array que declaras copmo combo 
// le traes el array del comboswiner y con eso en el if comparas si las 3 pociciones son iguales
   export const checkWinerFrom =(boardToCheck)=>{
    for(const combo of combosWiner){
      const [a,b,c] = combo
      if(
        boardToCheck[a]&&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      )
      return boardToCheck[a]
    }
    return null;
  }
  //esta funcion lo que hace esque la llamamos en el update para verificar djunto con el checwiner 
// para saber si hay un ganador si no se cumple el chechk winer se realiza en checkendgame decir que es un empate 
// y lo hacemos verificamso el newboard y el square que contiene los que hay en los cuadrittos yb si es distinto a null en todos los cuadros retorna el end game para que sepa que es empate
export const checkEndGame = (newBoard)=>{
    return newBoard.every((Square)=> Square!== null)
  }