import config from "./config.js";
import salas from "./salas.js";
import abertura from "./abertura.js";
import principal from "./principal.js";
import fase2 from "./fase2.js";
//import fase3 from "./fase3.js";
//import fim_do_jogo from "./encerramento1.js";
//import final_feliz from "./encerramento2.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);

this.socket = io();
this.socket.on("connect", () => {
  console.log("Conectado ao servidor para troca de mensagens.")
});
    this.scene.add("abertura", abertura);
    this.scene.add("salas", salas);
    this.scene.add("principal", principal);
    this.scene.add("fase2", fase2);
    //this.scene.add("fim-do-jogo", fim_do_jogo);
    //this.scene.add("final-feliz", final_feliz);

    this.scene.start("abertura");
  }
}

window.onload = () => {
  window.game = new Game();
};
