;(function(window){
  "use strict"
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  //var COFFEINE_RANGE_SELECTOR = '#strength :input';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders";

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  //var RangeHandler = App.RangeHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;

  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var myTruck = new Truck('ncc-1701', new RemoteDataStore(SERVER_URL));
  var formHandler = new FormHandler(FORM_SELECTOR);
  //var coffeineRangeHandler = new RangeHandler(COFFEINE_RANGE_SELECTOR);

  formHandler.addSubmitHandler( function(data){
    myTruck.createOrder(data);
    checkList.addRow(data);
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  //coffeineRangeHandler.addChangeHandler();
})(window);
