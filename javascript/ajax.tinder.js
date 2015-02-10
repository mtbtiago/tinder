Tinder = window.Tinder || {};

Tinder.ajax = function(url, data, callback) {

  var xhr = new XMLHttpRequest();

  xhr.open("POST", url);
  xhr.send(data);
  xhr.onload = callback;

}
