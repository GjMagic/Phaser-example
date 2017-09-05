let game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game')
let upKey;
game.MyStates = {}; // 创建一个场景组
game.MyStates.load = {
    preload: function() {
        game.load.image('bg', './assets/bg.jpg');
        game.load.image('copyright', './assets/copyright.png');
        game.load.spritesheet('myplane', './assets/myplane.png', 40, 40, 4); // 最后三个变量的意思：width，height，总帧数（总共几张图）
        game.load.spritesheet('startbutton', './assets/startbutton.png', 100, 40, 2);
        game.load.spritesheet('replaybutton', './assets/replaybutton.png', 80, 30, 2);
        game.load.spritesheet('sharebutton', './assets/sharebutton.png', 80, 30, 2);
        game.load.image('mybullet', './assets/mybullet.png');
        game.load.image('bullet', './assets/bullet.png');
        game.load.image('enemy1', './assets/enemy1.png');
        game.load.image('enemy2', './assets/enemy2.png');
        game.load.image('enemy3', './assets/enemy3.png');
        game.load.spritesheet('explode1', './assets/explode1.png', 20, 20, 3);
        game.load.spritesheet('explode2', './assets/explode2.png', 30, 30, 3);
        game.load.spritesheet('explode3', './assets/explode3.png', 50, 50, 3);
        game.load.spritesheet('myexplode', './assets/myexplode.png', 40, 40, 3);
        game.load.image('award', './assets/award.png');
        game.load.audio('ao', './assets/ao.mp3')
        game.load.audio('crash1', './assets/crash1.mp3')
        game.load.audio('crash2', './assets/crash2.mp3')
        game.load.audio('crash3', './assets/crash3.mp3')
        game.load.audio('deng', './assets/deng.mp3')
        game.load.audio('fashe', './assets/fashe.mp3')
        game.load.audio('normalback', './assets/normalback.mp3')
        game.load.audio('pi', './assets/pi.mp3')
        game.load.audio('playback', './assets/playback.mp3')
    },
    create: function() {
        game.state.start('start');
    }
}
game.MyStates.start = {
    create: function() {
        game.add.sprite(0, 0, 'bg');
    }
}

game.state.add('load', game.MyStates.load); // 添加加载场景 
game.state.add('start', game.MyStates.start); // 添加开始场景
game.state.start('load'); // 开启加载场景