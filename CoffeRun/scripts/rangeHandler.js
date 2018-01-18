;(function(window){
  var App = window.App || {};
  var $ = window.jQuery;

  function RangeHandler(selector){
      if(!selector){
        throw new Error('No selector provided');
      }

      this.$rangeElement = $(selector);
      if(this.$rangeElement.length !== 1){
        throw new Error('No range element or more then one found with selector: ' + selector);
      }
  }

  RangeHandler.prototype.addChangeHandler = function(fn) {
    this.$rangeElement.on('change', function(event){
      event.preventDefault();

      var newValue = this.value;
      switch(newValue){
        case '0': console.log('0');
          break;
        case '1':
          break;
        case '2':
          break;
        case '3':
          break;
      }
      if(fn)
        fn(newValue);
    });
  };

  App.RangeHandler = RangeHandler;
  window.App = App;
})(window);
