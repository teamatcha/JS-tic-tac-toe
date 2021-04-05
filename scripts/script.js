boxGrid = document.getElementById("grid-container");
restartButton = document.getElementById("resetGame");

boxPlayer1 = document.getElementById("player1");
/*
innput = document.createElement("input");
innput.setAttribute("placeholder","enter your name")
buttonSubmit = document.createElement("button");
buttonSubmit.innerHTML = "submit"
innput.appendChild(buttonSubmit);

boxPlayer1.appendChild(innput)
boxPlayer1.appendChild(buttonSubmit)
*/

const boardGame = (() => {
    const board = (length, element) => Array.from({length}, () => element);
    
    const createCell = (array) => {
        array.forEach(e => {
            button = document.createElement("button");
            button.classList.add("cell-class")
            button.innerHTML = e;
            boxGrid.appendChild(button)
        })
    }
    return{board, createCell};
})();


const players = (name) => {
    const player = () => console.log("test");
    //player = document.getElementById("player1").innerHTML;
    //console.log(fefe)
    /*const getName = () => name;

    const test = () => {
        buttonSubmit.addEventListener("click", () => {
            player.name = innput.value;
            console.log(player.name)
        })
    }*/
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
                } else{
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

        for(let i=0; i< winningCombo.length; i++){
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

const restartGame = () => {
    restartButton.addEventListener("click", init);
}

function init(){
    document.querySelectorAll(".cell-class").forEach((button) => {
        button.innerHTML = "";
        button.removeAttribute("disabled")
        board = boardGame.board(9,"")
    })
}

const play = () => {
    //init board game
    board = boardGame.board(9, "")
    boardGame.createCell(board);

    /*player1 = document.getElementById("player1").innerHTML;
    player2 = document.getElementById("player2").innerHTML;
    console.log(player1)
    toto = players(player1);
    console.log(toto)
    */
    const test = placeMaker(players.player)
    test.toto()

    restartGame();

};


play();

