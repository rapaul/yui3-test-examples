YUI.add('ball-pool', function(Y) {
  var create = function(randomNumberGenerator) {
    var usedNumbers = {};
    return {
      nextBall: function() {
        var number = randomNumberGenerator.generateNumber();
        while (usedNumbers[number]) {
          number = randomNumberGenerator.generateNumber();
        }
        usedNumbers[number] = true;
        return number;
      }
    }
  };
  Y.namespace('lotto');
  Y.lotto.BallPool = create;
}, '0.1');
