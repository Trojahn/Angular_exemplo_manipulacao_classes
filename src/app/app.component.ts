import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'exemplosManipulacaoClasses';
  menu: number = 0;
  cliquesBotao: number = 0;

  escolhaMenu(indice: number): void {
    this.menu = indice;
  }

  botao(): void {
    this.cliquesBotao++;
    if (this.cliquesBotao > 5) {
      this.cliquesBotao = 0;
    }
  }

  teste() {
    return undefined;
  }
}
