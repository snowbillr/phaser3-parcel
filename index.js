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

const game = new Phaser.Game(config);

function create() {
  const text = this.add.text(100, 100, 'Phaser + Parcel');
}