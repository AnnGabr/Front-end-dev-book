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
    $.post(this.serverUrl, value, function (serverResponse) {});
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    $.get(this.serverUrl, function (serverResponse) {
      cb(serverResponse);
    });
  }

  RemoteDataStore.prototype.get = function (key, cb) {
    $.get(this.serverUrl + '/' + key, function (serverResponse) {
      cb(serverResponse);
    });
  }

  RemoteDataStore.prototype.remove = function (key) {
    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  }

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
