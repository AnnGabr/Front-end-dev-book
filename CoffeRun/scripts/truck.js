;(function(window){
  "use strict"
  var App = window.App || {};

  function Truck(truckId, db){
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order) {
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function (customerId) {
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function () {
      var costumerIdArray = Object.keys(this.db.getAll());

      console.log('Truck #' + this.truckId + ' has pending orders');
      costumerIdArray.forEach( function(id){
        console.log(this.db.get(id));
      }, this);
  };

  App.Truck = Truck;
  window.App = App;
})(window);
