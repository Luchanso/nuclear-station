class Time extends Phaser.Text {
  constructor(game, x, y, time) {
    const style = {
      font: '41px Orbitron',
      fill: 'rgb(236, 241, 0)'
    }

    super(game, x, y, time, style);
  }

  update() {
    let date = new Date();
    let ms = date.getMilliseconds().toString();

    if (ms.length === 1) {
      ms = '00' + ms;
    } else if (ms.length === 2) {
      ms = '0' + ms;
    }

    this.text = `${date.toLocaleTimeString()}.${ms}`;    
  }

  set time(value) {
    this.text = time;
  }
}

Engine.Time = Time;
