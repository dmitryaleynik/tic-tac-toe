class  TicTacToe {
    constructor() {

        this.currentPlayer = "x";
        this.board = [];
        this.finished = false;
        this.draw = false;
        this.winner = null;
        this.noTurns=false;
         this.counter = 0;

        for (var i =0; i<3; i++){
            this.board.push([]);
        }
        for ( var i=0 ; i<3; i++){
            for (var j =0 ; j<3; j++){
                this.board[i][j]=null;
            }
        }

    }

    getCurrentPlayerSymbol() {

        return this.currentPlayer;



    }

    nextTurn(rowIndex, columnIndex) {


        if(!this.getFieldValue(rowIndex,columnIndex)){
            this.counter++;
            switch ( this.getCurrentPlayerSymbol()){
                case "o":
                    this.board[rowIndex][columnIndex]=-1;
                    this.currentPlayer= "x";
                    break;
                case "x":
                    this.board[rowIndex][columnIndex]=1;
                    this.currentPlayer = "o";
                    break;
            }


            this.isWin(rowIndex,columnIndex);
            this.isDraw();
            this.noMoreTurns();

        }

    }
    isWin(rowIndex,columnIndex){

        var sumRow = 0;
        var sumColumn=0;
        var sumDiagonal1=0;
        var sumDiagonal2=0;
        for (var i=0, j=2;i<3;i++, j--){
            sumRow += this.board[rowIndex][i];
            sumColumn += this.board[i][columnIndex];
            sumDiagonal1 += this.board[i][i];
            sumDiagonal2 += this.board[i][j];
        }

        if (sumRow==-3 || sumColumn==-3 || sumDiagonal1==-3 || sumDiagonal2==-3){
            this.winner = "o";
            this.finished= true;
            return;
        }
        else if (sumRow==3 || sumColumn==3 || sumDiagonal1==3 || sumDiagonal2==3 ){
            this.winner="x";
            this.finished=true;
            return;
        }

    }

    isFinished() {
        return   this.finished ;
    }

    getWinner() {
                return this.winner;

    }

    noMoreTurns() {
        if (this.counter==9){
            this.finished=true;
            this.draw=true;
            return true;
        }
        return false;
    }

    isDraw() {
        if ( !this.getWinner()) {
            if (this.counter == 9) {
                this.finished = true;
                this.draw = true;
                return true;
            }
        }
        return false;


    }

    getFieldValue(rowIndex, colIndex) {

        return this.board[rowIndex][colIndex]==1 ? "x" : (this.board[rowIndex][colIndex]==-1?  "o" : null) ;


    }
}




module.exports = TicTacToe;
