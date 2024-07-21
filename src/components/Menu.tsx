import '../styles/menu.css'

type ScoreboardProps = {
    pointsX: number;
    pointsO: number;
    turn: boolean;
}

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

function Scoreboard({pointsX, pointsO, turn}: ScoreboardProps) {
    return (
        <>
            <div className="scoreboard">
                <h4>Jogador X: {pointsX} pontos</h4>
                <h4>Jogador O: {pointsO} pontos</h4>
            </div>
            <div className="player-turn">
                Vez de {turn ? "X" : "O"}
            </div>
        </>
    );
}

export {
    Buttons,
    Scoreboard
}