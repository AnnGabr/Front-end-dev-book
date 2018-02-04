;(function(window){
  'use strict'

  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if(!url) {
      throw new Error('No remote url supplied');
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key, value) {
    $.post( this.serverUrl, value, function (serverResponse) {

    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
