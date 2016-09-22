class Time extends Phaser.Text {
  constructor(game, x, y, time) {
    const style = {
      font: '41px Open Sans',
      fill: 'rgb(236, 241, 0)'
    }

    super(game, x, y, time, style);
  }
}

Engine.Time = Time;
