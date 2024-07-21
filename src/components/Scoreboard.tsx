import '../styles/scoreboard.css'

type ScoreboardProps = {
    pointsX: number;
    pointsO: number;
    turn: boolean;
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

export default Scoreboard