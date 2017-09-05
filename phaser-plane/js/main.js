let game = new Phaser.Game(240, 400, Phaser.CANVAS, 'game')
let upKey;
game.MyStates = {}; // 创建一个场景组
game.MyStates.load = {
    preload: function() {
        game.load.image('bg', './assets/bg.jpg');
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

game.state.add('load', game.MyStates.load); // 添加场景一 
game.state.add('start', game.MyStates.start); // 添加场景二
game.state.start('load'); // 开启场景一