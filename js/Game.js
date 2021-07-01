export default class Game{
    
   constructor(){
    console.log("game")
    this.board=new Array(9).fill(null)
    this.turn="X";
   }
  nextTurn(){
   if(this.turn=="X"){
      this.turn="O";
   }
   else{
      this.turn="X";
   }
  }

  makeMove(i){
     if(this.endOfGame()){
        return ;
     }
     if(this.board[i]){
        return;
     }else{

    
   this.board[i]=this.turn;
  let winningCondition= this.findWinningCombinations()
      console.log("winner is",winningCondition)
      if(!winningCondition){
         this.nextTurn
      }      
}
  }
  endOfGame(){
   let winningComb=this.findWinningCombinations()
   if(winningComb){
      return true;
   }
   else{
      return false;
   }
}    
  findWinningCombinations(){
     const winningConditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
     ]
     for(const combination of winningConditions){
        const[a,b,c]=combination;
         if(this.board[a] &&

        
            (this.board[a]===this.board[b] && this.board[a] === this.board[c])){   
               return combination;
            }
            
         }
         return null;
  }
   
   

}