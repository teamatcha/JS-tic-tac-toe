boxGrid = document.getElementById("grid-container");
restartButton = document.getElementById("resetGame");

const restartGame = () => {
    restartButton.addEventListener("click", () => {
        document.querySelectorAll(".cell-class").forEach((button) => {
            button.innerHTML = "";
            button.removeAttribute("disabled")
            board = boardGame.board(9,"")
        })
    });
}

const boardGame = (() => {
    const board = (length, element) => Array.from({length}, () => element);
    
    const makeCell = (array) => {
        array.forEach(e => {
            button = document.createElement("button");
            button.classList.add("cell-class")
            button.innerHTML = e;
            boxGrid.appendChild(button)
        })
    }

    return{
        board,
        makeCell
    };

})();

const players = (name) => {
    const player = () => console.log(`are you a pirate or marine ?`)

    return {player};
}

        
const placeMaker = (name) => {
    const {player} = players(name)

    var marker = 1;
    const toto = () => {
        document.querySelectorAll(".cell-class").forEach((button,index) => {
            button.addEventListener('click', e =>{
                if(marker === 1){
                    button.innerHTML = "X"
                    board[index] = button.innerHTML
                    marker = 0

                }else{
                    button.innerHTML = "O"
                    board[index] = button.innerHTML
                    marker = 1
                }
                button.setAttribute("disabled", "disabled")
                checkWin()
              }) 
            button.setAttribute('style', 'color : black;')    
        })
    }

    const everyValue = (value) => value == "O" || value == "X";

    const checkWin = () => {
        winningCombo = [
            [board[0],board[1],board[2]], 
            [board[3],board[4],board[5]], 
            [board[6],board[7],board[8]],
            [board[0],board[3],board[6]], 
            [board[1],board[4],board[7]], 
            [board[2],board[5],board[8]],
            [board[0],board[4],board[8]], 
            [board[2],board[4],board[6]]
        ];

        for(var i=0; i< winningCombo.length; i++){
            if(winningCombo[i][0] == winningCombo[i][1] && winningCombo[i][0] == winningCombo[i][2] && winningCombo[i].every(everyValue)){
                alert("win !")
                document.querySelectorAll(".cell-class").forEach((button) => {
                    button.setAttribute("disabled","disabled")
                })
                true
            }
        }

        if(board.every(everyValue)){
            alert("draw !")
        }
        
    }

    return {player, toto, checkWin}
}


const play = () => {
    //init board game
    board = boardGame.board(9, "")

    boardGame.makeCell(board);


    //place maker
    const luffy = placeMaker("luffy")
    luffy.toto()

    restartGame();

};

play();

