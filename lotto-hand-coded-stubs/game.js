YUI.add('lotto-game', function(Y) {
  var Game = function(ballPool) {
    return {
      generate: function() {
        var numbers = [];
        for (var i = 0; i < 7; i++) {
          numbers.push(ballPool.nextBall());
        }
        return numbers;
      }
    }
  }
  Y.namespace('lotto');
  Y.lotto.Game = Game;
}, '0.1');
