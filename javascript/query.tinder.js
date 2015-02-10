Tinder = window.Tinder || {};

Tinder.query = function(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
}

Tinder.on = function(element, action, callback) {
  element.addEventListener(action,callback);
}
