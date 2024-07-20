import Header from "./components/Header";
import { Scoreboard, Buttons } from "./components/Menu"
import Placeholder from "./components/Placeholder"
import './styles/game.css'
import { ReactElement, useState } from "react";

type GameStates = {
  [key: string]: boolean;
}

const winingTable: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const board: ReactElement[] = []
  let [boardMapping, setBoardMapping]= useState<GameStates>({})
  let [turn, setTurn] = useState<boolean>(false)
  
  function playerClicked(id: string) {
    setTurn(prev => turn = !prev)
    setBoardMapping(prev => boardMapping = {...prev, [id]: turn})
  }

  function isWin() {
    winingTable.forEach((victoryPosition) => {
      const playerPosition = boardMapping[victoryPosition[0]]
      const playerPosition1 = boardMapping[victoryPosition[1]]
      const playerPosition2 = boardMapping[victoryPosition[2]]

      if (playerPosition != undefined && playerPosition1 != undefined && playerPosition2 != undefined){
        const isWinner = playerPosition === playerPosition1 && playerPosition === playerPosition2 && playerPosition1 === playerPosition2

        if (isWinner) {
          return turn ? alert("O Wins!"): alert("X Wins!");
        }
        //TODO remover verificação de dentro do loop e passar para fora a responsabilidade de retornar o vencendor
        //TODO inserir casos de empate também
        //TODO criar um placar e botao para reinicar placar e o jogo
      }
    })
  }
    
  for (let index = 0; index < 9; index++) {
    board.push(<Placeholder turn={turn} playerClicked={playerClicked} id={index.toString()} isWin={isWin}/>)    
  }

  return (
    <>
      <Header />
      <Scoreboard pointsO={0} pointsX={0} turn={"X"}/>
      <div className="game">
        {board}
      </div>
      <Buttons />
    </>
  )
}

export default App
