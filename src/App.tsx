import Placeholder from "./components/Placeholder"
import PlayerX from './components/PlayerX';
import PlayerO from './components/PlayerO';

import './styles/game.css'
import { ReactElement, useEffect, useState } from "react";

type GameStates = {
  [key: string]: string|undefined;
}

//TODO: Idenficiar se houve um ganhador a cada mudança de estado de um dos componentes
function App() {
  let [count, setCount] = useState(0)
  let [currentPlayer, setCurrentPlayer] = useState<string>()
  const [gameState, setGameState] = useState<GameStates>({})

  let winingTable: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const board: ReactElement[] = []
  let playerComponent: ReactElement|undefined = undefined

  const checkWinner = (gameState: GameStates): boolean => {
    let winnerPosition: string|undefined = ""
    let winnerPosition1: string|undefined = ""
    let winnerPosition2: string|undefined = ""
    let winner:boolean = false
    for (let chanceWinning of winingTable) {
      winnerPosition = gameState[chanceWinning[0]]
      winnerPosition1 = gameState[chanceWinning[1]]
      winnerPosition2 = gameState[chanceWinning[2]]

      if (winnerPosition && winnerPosition1 && winnerPosition2) {
        if(winnerPosition === winnerPosition1 && winnerPosition === winnerPosition2 && winnerPosition1 === winnerPosition2){
          winner = true
        }
      }
    }
    return winner
  }

  const onChangePlayer = (id: string): ReactElement => {
    playerComponent = currentPlayer === "X" ? <PlayerO /> : <PlayerX />
    setCurrentPlayer(currentPlayer = count % 2 === 0 ? "X" : "O")
    setCount(count + 1)

    setGameState(prevState => (
      {
        ...prevState,
        [id]: currentPlayer,
      })
    )

    return playerComponent
  }

  const isWin = (): boolean => {
    return checkWinner(gameState)
  }
  

  useEffect(() => {
    console.log(gameState);
    
    if (isWin()) {
      alert(currentPlayer + " Wins!")
      window.location.reload()  
    }
  }, [currentPlayer, onChangePlayer ]);

  for (let index = 0; index < 9; index++) {
    board.push(<Placeholder checkWin={isWin} changePlayer={onChangePlayer} id={index.toString()}/>)    
  }

  return (
    <div className="game">
      {board}
    </div>
  )
}

export default App
