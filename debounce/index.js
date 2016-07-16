'use stricts';

module.exports = (fn, time) => {
  let a;
  return function() {
    const args = [...arguments];
    clearTimeout(a);
    a = setTimeout(() => {
      fn.apply(this, [...args]);
    }, time);
  }
}
