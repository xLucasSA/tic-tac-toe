import '../styles/winMessage.css'

type Props = {
    player: boolean;
    isWinner: boolean;
}

function WinMessage({ player, isWinner }: Props) {
    if (isWinner) {
        return(
            <div className="message win">
                O Jogador {player ? "O" : "X"} venceu a partida! 
            </div>
        );
    }
    
    return(
        <div className="message">
            Deu Velha! &#128565;
        </div>
       
    );
}

export default WinMessage