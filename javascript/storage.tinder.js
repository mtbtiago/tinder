Tinder = window.Tinder || {};

Tinder.store = function(data) {
  localStorage.setItem("location",JSON.stringify(data));
}

Tinder.load = function() {
  saved_data = JSON.parse(localStorage.getItem("location"));
  return saved_data;
}