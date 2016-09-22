Engine.game = new Phaser.Game(600, 800, Phaser.AUTO);

Engine.game.state.add('Game', Engine.Game);
Engine.game.state.start('Game');
