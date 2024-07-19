import { ReactElement, useEffect, useState } from 'react';
import '../styles/placeholder.css';
import PlayerX from './PlayerX';
import PlayerO from './PlayerO';


type Props = {
    id: string;
    playerClicked: Function;
    turn: boolean;
    isWin: Function;
}

function Placeholder(props:Props) {
    const { id, playerClicked, turn, isWin } = {...props}
    let [hasChange, setHasChange] = useState<boolean>(false)
    let [playerX, setPlayerX] = useState<boolean>(false)
    let [playerO, setPlayerO] = useState<boolean>(false)

    function changeTurn() {
        playerClicked(id)
    }

    function showElement() {
        if (!hasChange) {      
            turn ? setPlayerX(true) : setPlayerO(true)
            setHasChange(true)
            changeTurn()
        }
    }

    useEffect(() => {
        isWin()
    }, [playerO, playerX])

    return (
        <div id={id} className="placeholder" onClick={() => showElement()}>
            {playerX && <PlayerX />}
            {playerO && <PlayerO />}
        </div>
    );
}

export default Placeholder