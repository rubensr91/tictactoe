import { Component } from "@angular/core";

@Component({
  selector: "tictactoe",
  template: `
    <div id="statusArea" className="status">
      Next player: <span>{{ currentPlayer }}</span>
    </div>
    <div id="winnerArea" className="winner">
      Winner: <span>{{ winner }}</span>
    </div>
    <section>
      <div class="row" *ngFor="let row of [0, 1, 2]; let i = index">
        <button
          (click)="onCol(row, col, $event)"
          [disabled]="winner"
          *ngFor="let col of [0, 1, 2]"
          style="width:50px;height:50px;"
        ></button>
      </div>
    </section>
  `,
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
    if (!event.target.innerHTML) {
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

  printPlay(event) {
    event.target.innerHTML = this.currentPlayer;
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.playerA ? this.playerB : this.playerA;
  }
}
