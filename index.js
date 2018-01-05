import 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 640,
  height: 480,
  scene: {
      create: create
  }
};

const gameEl = document.querySelector(`#${config.parent}`);
const game = new Phaser.Game(config);

function create() {
  const text = this.add.text(100, 100, 'Phaser + Parcel');
}

if (module.hot) {
  module.hot.accept(() => {
    while (gameEl.firstChild) {
      gameEl.removeChild(gameEl.firstChild);
    }
    game.boot();
  });
}