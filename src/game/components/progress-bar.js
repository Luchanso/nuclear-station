class ProgressBar extends Phaser.Sprite {
  constructor(game, x, y, color, isHorizontal) {
    super(game, x, y, 'progress-bar');

    this.data.color = color;
    this.data.isHorizontal = isHorizontal;
  }
}

Engine.ProgressBar = ProgressBar;
