import '../styles/buttons.css'

type ButtonsProps = {
    resetMatch: Function;
    resetGame: Function;
}

function Buttons({resetGame, resetMatch}:ButtonsProps) {

    return (
        <div className="buttons">
            <button type="button" onClick={() => resetMatch()}>Reinciar Jogo</button>
            <button type="button" onClick={() => resetGame()}>Reiniciar Placar</button>
        </div>
    );
}

export default Buttons