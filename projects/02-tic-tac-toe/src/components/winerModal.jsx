import{Square} from "./Square.jsx"
export function WinerModal ({winer,resetGame}) {
    if (winer == null)return null
    const winertext = winer == false ? 'Empate':'Gano'
    return(
        <section className='winner'>
                <div className='text'>
                  <h2>
                    {winertext}
                  </h2>
                  <header className='win'>
                    {winer && <Square>{winer}</Square>}
                  </header>
                  <footer>
                    <button onClick={resetGame}>Empezar de Nuevo</button>
                  </footer>
                </div>
              </section>                       
    )
}