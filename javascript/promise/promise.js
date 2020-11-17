(
  function (window) {

    /**
     * Promise Construtor
     * @param {Function} executor 
     */
    function Promise(executor) {
      console.log('custom promise')
    }

    /**
     * then
     * @param {Function} onResolved 
     * @param {Function} onRejected 
     */
    Promise.prototype.then = function(onResolved, onRejected) {

    }

    window.Promise = Promise
  }
)(window)