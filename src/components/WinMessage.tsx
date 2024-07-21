import '../styles/winMessage.css'

type Props = {
    player: boolean;
    isWinner: boolean;
}

function WinMessage({ player, isWinner }: Props) {
    if (isWinner) {
        return(
            <div className="win-message">
                O Jogador {player ? "O" : "X"} venceu a partida! 
            </div>
        );
    }
    
    return(
        <div className="win-message">
            Deu Velha! &#128565;
        </div>
       
    );
}

export default WinMessage