var noGetContains = require('./lib/rules/no-get-contains')
var noLiteralSelectors = require('./lib/rules/no-literal-selectors')
var noLongWait = require('./lib/rules/no-long-wait')

module.exports = {
  rules: {
    'no-get-contains': noGetContains,
    'no-literal-selectors': noLiteralSelectors,
    'no-long-wait': noLongWait,
  },
  configs: {
    recommended: {
      rules: {
        'cy/no-get-contains': 2,
        'cy/no-literal-selectors': 2,
        'cy/no-long-wait': 2,
      }
    }
  }
}
