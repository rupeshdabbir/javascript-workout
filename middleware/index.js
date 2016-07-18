'use stricts';

class Middleware {
  constructor() {
    this.middlewares = [];
  }

  use(fn) {
    const self = this;
    this.go = (function(stack) {
      return function(next) {
        stack.call(self, function() {
          fn.call(self, next.bind(self));
        });
      }.bind(this);
    })(this.go);
  }

  go(next) {
    next();
  }
}

module.exports = Middleware;
