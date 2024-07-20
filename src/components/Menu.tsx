import '../styles/menu.css'

type Props = {
    pointsX: number;
    pointsO: number;
    turn: boolean;
}

function Buttons() {
    return (
        <div className="buttons">
            <button type="button">Reinciar Jogo</button>
            <button type="button">Reiniciar Placar</button>
        </div>
    );
}

function Scoreboard({pointsX, pointsO, turn}: Props) {
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