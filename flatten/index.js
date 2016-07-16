'use stricts';
const assert = require('assert');

module.exports = function(arr) {

  assert(Array.isArray(arr), 'input need to be an array');

  function expand(array) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (Array.isArray(item)) {
        const childen = expand(item);
        results = [...results, ...childen];
      } else {
        results = [...results, item];
      }
    }
    return results;
  }

  return expand(arr);
}
