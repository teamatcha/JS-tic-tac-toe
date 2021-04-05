boxGrid = document.getElementById("grid-container");

const boardGame = (() => {
    const board = (length, element) => Array.from({length}, () => element);
    
    const makeCell = (array) => {
        array.forEach(e => {
            popo = document.createElement("button");
            popo.classList.add("cell-class")
            popo.innerHTML = e;
            boxGrid.appendChild(popo)
        })
     //   console.log(array)
    }

    return{
        board,
        makeCell
    };
})();

/*board = boardGame.board(9,"-")
board[0] = "yoyo"
console.log( board)
boardGame.makeCell(board);

titi = ["a","b","c","d","e","r"]
newnew = []

console.log("titi")
*//*console.log(titi)

console.log(newnew.push(titi.splice(0,2)))
console.log(titi)
console.log(newnew.push(titi.splice(0,2)))
console.log(titi)
console.log(newnew.push(titi.splice(0,2)))

console.log(newnew)*/


const players = (name) => {
    const player = () => console.log(`my name is ${name}`)
    return {player};
}

const placeMaker = (name) => {
    const {player} = players(name)

    var momo = 1;
    const toto = () => {
        document.querySelectorAll(".cell-class").forEach((button,index) => {
            button.addEventListener('click', e =>{
                if(momo === 1){
                    button.innerHTML = "X"
                    board[index] = button.innerHTML
                    momo = 0

                }else{
                    button.innerHTML = "O"
                    board[index] = button.innerHTML
                    momo = 1
                }
                button.setAttribute("disabled", "disabled")
                checkWin()
              }) 
            button.setAttribute('style', 'color : black;')    

            
        })
    }

    const everyValue = (vaue) => vaue == "O" || vaue == "X";
    const checkWin = () => {
        rowWin = [[board[0],board[1],board[2]], [board[3],board[4],board[5]], [board[6],board[7], board[8]]]
        columnWin =[[board[0],board[3],board[6]], [board[1],board[4],board[7]], [board[2],board[5], board[8]]]
        diagonalWin = [[board[0], board[4], board[8]], [board[2], board[4], board[6]]]

        for(var i=0; i< 3; i++){
            if (rowWin[i].every(everyValue))
                if(rowWin[i][0] === rowWin[i][1] && rowWin[i][0] === rowWin[i][2] ){
                    alert("win !")
                }

            if (columnWin[i].every(everyValue))
                if(columnWin[i][0] == columnWin[i][1] && columnWin[i][0] == columnWin[i][2] ){
                    alert("win 2!")
                }
        }
        for(var i=0; i< 2; i++){
            if (diagonalWin[i].every(everyValue))
            if(diagonalWin[i][0] == diagonalWin[i][1] && diagonalWin[i][0] == diagonalWin[i][2] ){
                alert("win 3!")
            }
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

    //luffy.lolo();
};

play();


/*
function test(){
    document.querySelector("#grid-container").
}*/

/*
const luffy = placeMaker('Luffy')
luffy.toto();
//test()
console.log( board[0])
*/