import config from "./config.js";

import abertura from "./abertura.js";
import principal from "./principal.js";
//import fim_do_jogo from "./encerramento1.js";
//import final_feliz from "./encerramento2.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.scene.add("abertura", abertura);
    this.scene.add("principal", principal);
    //this.scene.add("fim-do-jogo", fim_do_jogo);
    //this.scene.add("final-feliz", final_feliz);

    this.scene.start("principal");
  }
}

window.onload = () => {
  window.game = new Game();
};