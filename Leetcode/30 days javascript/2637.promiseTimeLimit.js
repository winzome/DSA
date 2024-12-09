/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  //   return async function (...args) {

  //     const prom1 = new Promise((resolve, reject) => {
  //       resolve(fn(...args));
  //     });
  //     const prom2 = new Promise((resolve, reject) => {
  //       setTimeout(function () {
  //         reject("Time Limit Exceeded");
  //       }, t);
  //     });
  //     return await Promise.race([prom1, prom2]);
  //   };
  //or
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
