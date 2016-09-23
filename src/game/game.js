class Game extends Phaser.State {
  preload() {
    this.load.image('rect-button', 'assets/img/rect-button.png');
    this.load.image('background', 'assets/img/background.png')
  }

  create() {
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.addBackground();
    this.addClock();
    this.addBtnsPanell();

    // Add here ur content...

    this.addFocusEffect();

    // this.btn = new Engine.RectangleButton(this.game, this.game.width / 2, this.game.height / 2, 0xda0c0c, 'NcSp');
    // this.add.existing(this.btn);
  }

  addBtnsPanell() {
    const marginTop = 150;

    const xsize = 5;
    const ysize = 3;
    const margin = 15;

    this.btnGroup = this.add.group();

    for (let x = 0; x < xsize; x++) {
      for (let y = 0; y < xsize; y++) {
        let btn = new Engine.RectangleButton(this.game, 0, 0, 0, 'SR13');

        btn.x = x * (btn.width + margin);
        btn.y = y * (btn.height + margin);

        if (x === xsize - 1) {
          btn.color = 0x00ff0a;
        } else {
          btn.color = 0xda0c0c;
        }

        this.btnGroup.add(btn);
      }
    }

    this.btnGroup.x = this.game.world.width / 2 - this.btnGroup.width / 2;
    this.btnGroup.y = marginTop;
  }

  addFocusEffect() {
    let bitmap = this.game.make.bitmapData(this.game.world.width, this.game.world.height);
    let gradient = bitmap.ctx.createLinearGradient(0, 0, 0, this.game.world.height);

    gradient.addColorStop(0, "rgba(33, 33, 33, 0.3)");
    gradient.addColorStop(0.25, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.75, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(33, 33, 33, 0.3)");

    bitmap.ctx.fillStyle = gradient;
    bitmap.ctx.fillRect(0, 0, this.game.world.width, this.game.world.height);

    let sprite = this.add.sprite(0, 0, bitmap);
  }

  addBackground() {
    this.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');
  }

  addClock() {
    const marginTop = 50;

    this.clock = new Engine.Time(this.game, 0, marginTop, '00:00:00.191');
    this.clock.x = this.game.width / 2 - this.clock.width / 2;

    // this.add.tween(this.clock)
    //   .to({
    //     y: this.game.height
    //   }, 5000)
    //   .to({
    //     y: 0
    //   }, 5000)
    //   .loop(true)
    //   .start();

    this.add.existing(this.clock);
  }

  render() {
    return;
    let line1 = new Phaser.Line(this.game.world.centerX, 0, this.game.world.centerX, this.game.height);
    let line2 = new Phaser.Line(0, this.game.world.centerY, this.game.width, this.game.world.centerY);

    this.game.debug.geom(line1, 'rgb(0, 70, 255)');
    this.game.debug.geom(line2, 'rgb(0, 70, 255)');

    this.game.debug.spriteBounds(this.clock, 'rgba(0, 70, 255, 0.3)');
  }
}

Engine.Game = Game;
