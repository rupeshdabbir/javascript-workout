export default function curry(fn) {
  // get total number of arguments
  let totalArgs = fn.length;

  const partial = (args) => {
    return (...newArgs) => {
      let tArgs = args.concat(newArgs);
      return func(...tArgs);
    }
  }

  const func = (...args) => {
    if (totalArgs > args.length) {
      // need more
      return partial(args);
    } else {
      return fn(...args);
    }
  }

  return func;
}
