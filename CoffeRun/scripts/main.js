;(function(window){
  "use strict"
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var COFFEINE_RANGE_SELECTOR = '#strength :input';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var RangeHandler = App.RangeHandler;

  var myTruck = new Truck('ncc-1701', new DataStore());
  var formHandler = new FormHandler(FORM_SELECTOR);
  var coffeineRangeHandler = new RangeHandler(COFFEINE_RANGE_SELECTOR);

  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  coffeineRangeHandler.addChangeHandler();
  console.log(coffeineRangeHandler);
})(window);
