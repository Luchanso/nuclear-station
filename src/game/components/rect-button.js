class RectangleButton extends Phaser.Sprite {
  set color(value) {
    this.data.color = value;
    this.tint = value;
  }

  constructor(game, x, y, color, text) {
    const maxTextLength = 4;

    super(game, x, y, 'rect-button');

    if (text.length > maxTextLength) {
      text = text.splice(0, maxTextLength);
    }

    this.data.text = text;
    this.data.color = color;

    this.tint = this.data.color;
    this.inputEnabled = true;

    this.events.onInputDown.add(this.shakeMe, this);

    this.addText();
  }

  shakeMe() {
    this.game.add.tween(this)
      .to({
        x: this.x - 25
      }, 20)
      .to({
        x: this.x + 50
      }, 20)
      .to({
        x: this.x
      }, 20)
      .start();
  }

  addText() {
    const paddingTop = 3;

    const style = {
      font: '21px Open Sans',
      fill: 'white'
    }

    this.lable = this.game.make.text(this.width / 2, this.height / 2 + paddingTop, this.data.text, style);
    this.lable.anchor.setTo(0.5);
    this.addChild(this.lable);
  }
}

Engine.RectangleButton = RectangleButton;
