import { Component } from "@angular/core";

@Component({
  selector: "tictactoe",
  templateUrl: "tictactoe.component.html",
  styles: []
})
export class TicTacToeComponent {
  playerA = "X";
  playerB = "O";
  playerACount = 0;
  playerBCount = 0;
  currentPlayer = this.playerA;
  matrixA = [];
  matrixB = [];
  winner = null;
  winCombos = [
    [[0, 0], [0, 1], [0, 2]], // 0 1 2
    [[1, 0], [1, 1], [1, 2]], // 3 4 5
    [[2, 0], [2, 1], [2, 2]], // 6 7 8
    [[0, 1], [1, 1], [2, 1]], // 2 4 6
    [[0, 0], [1, 1], [2, 2]], // 0 4 8
    [[0, 0], [1, 0], [2, 0]], // 0 3 6
    [[0, 1], [1, 1], [2, 1]], // 1 4 7
    [[0, 2], [1, 1], [2, 0]] // 2 5 8
  ];

  onCol(row, col, event): void {
    if (event.target.innerHTML === '&nbsp;') {
      if (this.currentPlayer === this.playerA) {
        this.matrixA[this.playerACount] = [row, col];
        this.playerACount++;
      } else if (this.currentPlayer === this.playerB) {
        this.matrixB[this.playerBCount] = [row, col];
        this.playerBCount++;
      }

      this.printPlay(event);
      this.checkWinner();
      this.switchPlayer();
    }
  }

  checkWinner(): void {
    if (this.matrixA.length == 3 || this.matrixB.length == 3) {
      this.winCombos.forEach(combo => {
        if (this.currentPlayer === this.playerA) {
          if (JSON.stringify(this.matrixA.sort()) === JSON.stringify(combo)) {
            this.winner = this.playerA;
          }
        } else if (this.currentPlayer === this.playerB) {
          if (JSON.stringify(this.matrixB.sort()) === JSON.stringify(combo)) {
            this.winner = this.playerB;
          }
        }
      });
    }
  }

  private printPlay(event): void {
    event.target.innerHTML = this.currentPlayer;
  }

  private switchPlayer(): void {
    this.currentPlayer =
      this.currentPlayer === this.playerA ? this.playerB : this.playerA;
  }
}
