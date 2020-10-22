const chalk = require('chalk');


/**
 * Error Handler
 *
 * @param err
 */
function errorHandler(err) {
  console.error('\n', chalk.red(err));
  process.exit(1);
}


/**
 * Multiple Async Handler
 *
 * @param promises
 * @returns {Promise<void>}
 */
async function multipleAsyncHandler(promises) {
  for await (let [fn, args] of promises) {
    await fn(...args)
      .catch(err => errorHandler(err));
  }
}


module.exports = {
  errorHandler,
  multipleAsyncHandler
}
