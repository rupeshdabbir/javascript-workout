'use stricts';

module.exports = function() {

  let middlewares = [];

  function use(middleware) {
    middlewares.push(middleware);
  }

  function go() {
    const cxt = this;
    for(let i = 0; i < middlewares.length; i++) {
      const middleware = middlewares[i];
      middleware.bind(cxt);
    }
  }

  return {
    use: use,
    go: go
  }
}
