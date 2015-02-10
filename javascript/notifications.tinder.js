Tinder = window.Tinder || {};

Tinder.notify = function(data) {
  var map_img =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    data.latlong + "&size=800x800" +
    "&markers=size:mid%7Ccolor:red%7C" + data.latlong;
  var options = {
    icon: map_img,
    body: data.address
  };
  notification = new Notification("You are here", options);

  notification.onclick = function() {
    window.open("https://www.google.es/maps/place/@" + data.latlong);
  };
}
