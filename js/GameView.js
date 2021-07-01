export default class GameView{


    constructor(){
        console.log("gameview")
    }
    updateBoard(game){
        this.updateTurn(game)
       
       // console.warn(game.board)
        for(let i=0;i<game.board.length;i++){
        //console.info(game.board[i])
            //use backticks to access variables ``${}
            const tile=document.querySelector(`.board-tile[data-index='${i}']`)
            tile.textContent=game.board[i]


        }
    }

updateTurn(game){
let playerX=document.querySelector(".player-x")
let playerO=document.querySelector(".player-o")

if(game.turn=='X'){
    playerX.classList.add('active')
    playerO.classList.remove('active')

}else{
    playerO.classList.add('active')
    playerX.classList.remove('active')


}    
}
}