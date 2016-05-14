function deepFreeze(object) {
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (isObject(object[property])) {
        deepFreeze(object[property]);
      }
    }
  }

  return Object.freeze(object);
}

function isObject(object) {
  if (typeof object === 'object' && object !== null) {
    return true;
  }

  if (typeof object === 'function') {
    return true;
  }

  return false;
}

module.exports = deepFreeze;
