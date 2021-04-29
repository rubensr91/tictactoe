import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TicTacToeComponent } from "./tictactoe.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TicTacToeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
