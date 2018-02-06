
requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery-3.3.1.min',
    firebase: 'https://www.gstatic.com/firebasejs/4.9.0/firebase',
    phaser: 'lib/phaser.min',
    appdev: 'lib/app-dev-lib'
  },
  shim: {
    firebase: {
      exports: 'firebase'
    },
    phaser: {
      exports: 'Phaser'
    }
  }
});
