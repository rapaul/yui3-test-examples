YUI.add('random-number', function(Y) {
  var create = function() {
    return {
      generateNumber: function() {
        return Math.floor((Math.random() * 9) + 1);
      }
    }
  };
  Y.namespace('lotto');
  Y.lotto.RandomNumberGenerator = create;
}, '0.1');
