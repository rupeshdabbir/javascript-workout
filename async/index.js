class Async {
  static next(func, funcs) {
    let idx = null;
    for (let i = 0; i < funcs.length; i++) {
      if (func === funcs[i]) {
        idx = i;
      }
    }

    if (idx && idx+1 < funcs.length) {
      return funcs[idx+1];
    }

    return null;
  }

  static sequence(fns) {
    return (done) => {
      let i = 0;
      const x = (cb, val) => {
        if (i === fns.length) {
          done(null, val);
        }

        fns[i++](x, val);
      }

      x(x);
    }
  }

  static parallel(fns) {
    return (done) => {
      let i = 0;
      let results = [];
      for (let y = 0; y < fns.length; y++) {
        let fn = fns[y];
        fn((err, val) => {
          i++;
          results[y] = err || val;
          if (i === fns.length) {
            done(null, results);
          }
        });
      }
    }
  }

  static race(fns) {
    return (done) => {
      let finish = false;
      for (let y = 0; y < fns.length; y++) {
        let fn = fns[y];
        fn((err, val) => {
          if(!finish) {
            finish = true;
            done(err, val);
          }
        });
      }
    }
  }
}

export default Async;
