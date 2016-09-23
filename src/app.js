// 640x315
// 335x640

Engine.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);

Engine.game.state.add('Game', Engine.Game);
Engine.game.state.start('Game');
