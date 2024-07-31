[English](#tic-tac-toe-in-react) / [Português](#jogo-da-velha-em-react)

# Tic-Tac-Toe in React

This is a simple Tic-Tac-Toe game implemented in React using Vite. The game allows two players to alternate placing their symbols (`X` and `O`) on a 3x3 board. The game automatically checks for win and draw conditions and keeps track of the score.

## Features

- **Interactive Gameplay**: Allows two players to take turns.
- **Win Detection**: Checks if a player has won based on the winning combinations.
- **Draw Detection**: Detects when the game ends in a draw.
- **Score Keeping**: Maintains the score for both players.
- **Reset**: Allows resetting the game or the score.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/xLucasSA/tic-tac-toe.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd tic-tac-toe
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Start the Development Server**:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Project Structure

- `src/`
  - `components/`
    - `Header.tsx` - Header component.
    - `Scoreboard.tsx` - Component that displays the score.
    - `Placeholder.tsx` - Component for the board cells.
    - `Buttons.tsx` - Component with control buttons (reset game and reset score).
    - `WinMessage.tsx` - Component that displays a win message.
  - `styles/`
    - `index.css` - Main stylesheet.
    - `game.css` - Styles for the game.
    - `buttons.css` - Styles for the buttons.
    - `placeholder.css` - Styles for the board cells.
    - `playerO.css` - Styles for player O's cells.
    - `playerX.css` - Styles for player X's cells.
    - `scoreboard.css` - Styles for the game scoreboard.
    - `winMessage.css` - Styles for the win message.
  - `App.tsx` - Main component of the application.

## Technologies Used

- **React**: Library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Vite**: Frontend build tool that provides a fast and optimized development environment.
- **CSS**: For styling the components.

## Contribution

Feel free to contribute to this project! You can open issues or submit pull requests to improve the game.

## Contact

If you have any questions, please contact [lsdeabreu@gmail.com](mailto:lsdeabreu@gmail.com).

---

Have fun playing and exploring the code!

<br />
<br />

---

---

<br />
<br />

# Jogo da Velha em React

Este é um projeto simples de Jogo da Velha (Tic-Tac-Toe) implementado em React usando Vite. O jogo permite que dois jogadores se alternem para colocar seus símbolos (`X` e `O`) em um tabuleiro de 3x3. O jogo verifica automaticamente as condições de vitória e empate e mantém a contagem de pontos.

## Funcionalidades

- **Jogo Interativo**: Permite que dois jogadores joguem alternadamente.
- **Detecção de Vitória**: Verifica se um jogador venceu com base nas combinações vencedoras.
- **Empate**: Detecta quando o jogo empata.
- **Contagem de Pontos**: Mantém a contagem de pontos para ambos os jogadores.
- **Reset**: Permite resetar o jogo ou o placar.

## Instalação

1. **Clone o Repositório**:

    ```bash
    git clone https://github.com/xLucasSA/tic-tac-toe.git
    ```

2. **Navegue até o Diretório do Projeto**:

    ```bash
    cd tic-tac-toe
    ```

3. **Instale as Dependências**:

    ```bash
    npm install
    ```

4. **Inicie o Servidor de Desenvolvimento**:

    ```bash
    npm run dev
    ```

    O aplicativo estará disponível em `http://localhost:5173`.

## Estrutura do Projeto

- `src/`
  - `components/`
    - `Header.tsx` - Componente de cabeçalho.
    - `Scoreboard.tsx` - Componente que exibe o placar.
    - `Placeholder.tsx` - Componente para as células do tabuleiro.
    - `Buttons.tsx` - Componente com botões de controle (resetar jogo e resetar placar).
    - `WinMessage.tsx` - Componente que exibe uma mensagem de vitória.
  - `styles/`
    - `index.css` - Arquivo de estilos principal.
    - `game.css` - Arquivo de estilos para o jogo.
    - `buttons.css` - Arquivo de estilos para os botões.
    - `placeholder.css` - Arquivo de estilos para as células do tabuleiro.
    - `playerO.css` - Arquivo de estilos para as células do jogador O.
    - `playerX.css` - Arquivo de estilos para as células do jogador X.
    - `scoreboard.css` - Arquivo de estilos para o placar do jogo.
    - `winMessage.css` - Arquivo de estilos para a mensagem de fim de jogo.
  - `App.tsx` - Componente principal do aplicativo.

## Tecnologias Usadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática.
- **Vite**: Ferramenta de construção de projetos frontend que fornece um ambiente de desenvolvimento rápido e otimizado.
- **CSS**: Para estilização dos componentes.

## Contribuição

Sinta-se à vontade para contribuir para este projeto! Você pode abrir problemas (issues) ou enviar pull requests para melhorar o jogo.

## Contato

Se você tiver alguma dúvida, entre em contato com [lsdeabreu@gmail.com](mailto:lsdeabreu@gmail.com).

---

Divirta-se jogando e explorando o código!