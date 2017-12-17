;(function(window){
  var App = window.App || {};

  function DataStore(){
    console.log("running ds");
  }

  App.DataStore = DataStore;
  window.App = App;
})
