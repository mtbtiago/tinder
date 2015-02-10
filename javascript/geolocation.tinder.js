Tinder = window.Tinder || {};

Tinder.getLocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    Tinder.last_location.address = "I have not idea where you are";
  }
}

function onSuccess(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  Tinder.last_location = {latlong: "", address: "not defined"};
  Tinder.last_location.latlong = lat + "," + lon;
  //var last_location = "41.3916489,2.1770785999999998";
}

function onError() {
  Tinder.last_location.address = "can't get your location";
}
