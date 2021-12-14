import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  title: string = 'Nosso Jogo da Velha';

  // Propriedade que indica o jogador atual da partida

  currentPlayer: string = 'O';

  // Propriedade que indica o vencedor da partida

  winner: string = '';

  /**
   * Precisamos declarar agora uma propriedade referente ao conteúdo 
   * de cada célula do tabuleiro. Vamos criar uma matriz (vetor de um vetor) 
   * de caracteres. Cada vetor é uma linha do tabuleiro e dentro de cada vetor 
   * terá três colunas e os caracteres vazios são os espaços que vão receber O ou X
   */

  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  /**
   * Criar uma função para saber o andamento da partida, que precisa ter 
   * como parâmetros a linha e a coluna nas quais foi feita a jogada
   */

  processPlay(linha: number, coluna: number) {

    /**
     * Verificar se a célula está vazia e se o jogo não acabou 
     * (verificando se a propriedade do vencedor está vazia). 
     * Se ambas as condições forem verdadeiras, a jogada será realizada.
     */

    if (this.board[linha][coluna] === "" && this.winner === "") {
      /**
       * Registrar as jogadas realizadas nas células. 
       * Toda vez que clicar na tela vai trocar o valor 
       * de O para X pelo jogador atual
       */

      this.board[linha][coluna] = this.currentPlayer;

      /**
       * Verificar se o jogador atual é o vencedor da partida. 
       * Verificar também se a jogada do vencedor aconteceu na horizontal, 
       * vertical ou diagonal.
       */

      if (this.checkWinner(this.currentPlayer)) {

        this.winner = this.currentPlayer

      }

      // Trocar o jogador da partida. Se o jogador atual for O, trocar para X e vice-versa

      if (this.currentPlayer === "O") {

        this.currentPlayer = "X"
      } else {
        this.currentPlayer = "O"
      }
    }
  }


  /**
   * Vamos criar antes uma função para saber se o jogador atual é o vencedor 
   * que retorna um valor lógico (booleano)
   */

  checkWinner(player: string) {

    // Percorrer todas as células do tabuleiro com um laço de repetição

    for (let i = 0; i < this.board.length; i++) {

      // Se o jogador completou a jogada em todas as linhas, 
      // o resultado será o jogador atual

      if (this.board[i][0] === player &&
        this.board[i][1] === player &&
        this.board[i][2] === player) {
        return true
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] === player &&
        this.board[1][i] === player &&
        this.board[2][i] === player) {
        return true
      }
    }

    if (this.board[0][0] === player &&
      this.board[1][1] === player &&
      this.board[2][2] === player) {
      return true
    }

    if (this.board[0][2] === player &&
      this.board[1][1] === player &&
      this.board[2][0] === player) {
      return true
    }
    return false
  }

  // Método para retornar o jogo ao estado inicial

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
