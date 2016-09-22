class Game extends Phaser.State {
  preload() {
    this.load.image('rect-button', 'assets/img/rect-button.png');
  }

  create() {
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.btn = new Engine.RectangleButton(this.game, 250, 250, 0xda0c0c, 'NcS7');

    this.add.existing(this.btn);
  }

  render() {
    this.game.debug.spriteBounds(this.btn.lable, 'rgba(43, 215, 66, 0.3)');
  }
}

Engine.Game = Game;
