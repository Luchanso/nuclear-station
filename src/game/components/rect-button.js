class RectangleButton extends Phaser.Sprite {
  constructor(game, x, y, color, text) {
    const maxTextLength = 4;

    super(game, x, y, 'rect-button');

    if (text.length > maxTextLength) {
      text = text.splice(0, maxTextLength);
    }

    this.data.text = text;
    this.data.color = color;

    this.tint = this.data.color;

    this.addText();
  }

  addText() {
    const style = {
      font: '21px Open Sans',
      fill: 'white'
    }

    this.lable = this.game.make.text(this.width / 2, this.height / 2, this.data.text, style);
    this.lable.anchor.setTo(0.5);
    this.addChild(this.lable);
  }
}

Engine.RectangleButton = RectangleButton;
