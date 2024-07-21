import Header from "./components/Header";
import Buttons from "./components/Buttons"
import Scoreboard from "./components/Scoreboard";
import Placeholder from "./components/Placeholder"
import './styles/game.css'
import { ReactElement, useEffect, useState } from "react";

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
  let [gameEnd, setGameEnd] = useState<boolean>(false)
  let [pointsX, setPointsX] = useState<number>(0)
  let [pointsO, setPointsO] = useState<number>(0)
  let [reset, setReset] = useState<boolean>(false)
  
  //Change player's turn
  function playerClicked(id: string) {
    setTurn(prev => turn = !prev)
    setBoardMapping(prev => boardMapping = {...prev, [id]: turn})
  }

  //Check if there is a winner
  function isWin() {
    winingTable.forEach((victoryPosition) => {
      const playerPosition = boardMapping[victoryPosition[0]]
      const playerPosition1 = boardMapping[victoryPosition[1]]
      const playerPosition2 = boardMapping[victoryPosition[2]]

      if (playerPosition != undefined && playerPosition1 != undefined && playerPosition2 != undefined){
        const isWinner = playerPosition === playerPosition1 && playerPosition === playerPosition2 && playerPosition1 === playerPosition2

        if (isWinner) {
          endMach(playerPosition)
        }
      }
    })
  }

  //Check if is a draw
  function isDraw() {
    let isDraw: boolean = true 
    for (let i = 0; i < 9; i++) {
      if (boardMapping[i] === undefined){
        isDraw = false
      }
    }

    if (isDraw) {
      endMach()
    }
  }

  function endMach(player?:boolean) {
    //O wins
    if (player === true) {
      setPointsO(prev => prev + 1)
    }

    //X wins
    if (player === false) {
      setPointsX(prev => prev + 1)
    }

    setGameEnd(true)
    //TODO implementar lógica para reiniciar o a partida e o game
  }

  useEffect(() => {
    isWin()
    isDraw()
  }, [turn])

  function resetGame() {
    resetMatch()
    setPointsO(0)
    setPointsX(0)
  }

  function resetMatch() {
    setBoardMapping({})
    setGameEnd(false)
    setReset(true)
  }

  //Create game board
  for (let index = 0; index < 9; index++) {
    board.push(
    <Placeholder 
      isReseted={reset}
      setReset={setReset}
      gameEnd={gameEnd} 
      turn={turn} 
      playerClicked={playerClicked} 
      id={index.toString()}
      />
    )    
  }

  return (
    <>
      <Header />
      <Scoreboard pointsO={pointsO} pointsX={pointsX} turn={turn}/>
      <div className="game">
        {board}
      </div>
      <Buttons resetMatch={resetMatch} resetGame={resetGame}/>
    </>
  )
}

export default App
