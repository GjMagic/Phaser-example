let game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game');
let upKey;
game.MyStates = {}; // 创建一个场景组

game.MyStates.boot = { // boot 引导     进度条引入场景
    preload: function() {
        game.load.image('preloader', './assets/preloader.gif');
        if (!game.device.desktop) { // 游戏设备不是PC端
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT; // 屏幕适配
        }
    },
    create: function() {
        game.state.start('load');
    }
}

game.MyStates.load = { // 加载资源场景
    preload: function() {
        let preloadSprite = game.add.sprite(game.width / 2 - 220 / 2, game.height / 2 - 19 / 2, 'preloader'); // 添加一个进度条精灵
        game.load.setPreloadSprite(preloadSprite); // 设置预加载精灵

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
game.MyStates.start = { // 开始场景
    create: function() {
        game.add.image(0, 0, 'bg');
        game.add.image(12, game.height - 16, 'copyright');
        let myplane = game.add.sprite(100, 100, 'myplane'); // 添加飞机精灵
        myplane.animations.add('fly'); // 添加飞机动画
        myplane.animations.play('fly', 10, true); // 循环10ms播放一次飞机动画
        game.add.button(70, 200, 'startbutton', this.onStartClick, this, 1, 1, 0); // button(x,y,key,callback,callbackContext,移入停在哪一帧，移出，按下，抬起)
    },
    onStartClick: function() {
        game.state.start('play');
    }
}
game.MyStates.play = { // 开始场景
    create: function() {
        let bg = game.add.tileSprite(0, 0, game.width, game.height, 'bg'); //瓦片精灵 tileSprite(x,y,平铺宽，平铺高，key);
        bg.autoScroll(0, 20); // autoScroll(v/s,v/s) 自动滚动(每秒滚动速度)
        let myplane = game.add.sprite(100, 100, 'myplane'); // 添加飞机精灵
        myplane.animations.add('fly'); // 添加飞机动画
        myplane.animations.play('fly', 10, true); // 循环10ms播放一次飞机动画
        game.add.tween(myplane).to({ y: game.height - 40 }, 1000, Phaser.Easing.Linear.None, true);
        // tween(key).to({y:运动到的位置},持续时间,运动形式（匀速运动）,autoStart);
    }
}
game.state.add('boot', game.MyStates.boot); // 添加开头引入场景 
game.state.add('load', game.MyStates.load); // 添加加载场景 
game.state.add('start', game.MyStates.start); // 添加开始场景
game.state.add('play', game.MyStates.play); // 添加play场景
game.state.start('boot'); // 开启引导场景