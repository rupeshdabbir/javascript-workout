'use stricts';

class Middleware {
  constructor() {
    this.fns = [];
  }

  use(fn) {
    this.fns.push(fn);
    return this;
  }

  go(next) {
    let i = this.fns.length;
    while(i--) {
      const fn = this.fns[i];
      fn.apply(this);
    }
  }
}

module.exports = Middleware;
