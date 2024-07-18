import { ReactElement, useEffect, useState } from 'react';
import '../styles/placeholder.css'

type Props = {
    id: string;
    changePlayer: Function;
    checkWin: Function
}

function Placeholder(props: Props) {
    let { changePlayer, id, checkWin } = {...props}
    let [clicked, setClicked] = useState(false)
    let [player, setPlayer] = useState<ReactElement>()

    useEffect(() => {
        if (clicked){
            checkWin()
        }  
    }, [player, changePlayer])
    
    const clickedEvent = () => {
        if (!clicked){
            setClicked(clicked = true)
            setPlayer(changePlayer(id))
        }
    }

    return (
        <div id={id} className="placeholder" onClick={() => clickedEvent()}>
            {clicked && player}
        </div>
    );
}

export default Placeholder