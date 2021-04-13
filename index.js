var noGetContains = require('./lib/rules/no-get-contains')
var noLiteralSelectors = require('./lib/rules/no-literal-selectors')
var noLongWait = require('./lib/rules/no-long-wait')
var noXit = require('./lib/rules/no-xit')
var noItOnly = require('./lib/rules/no-it-only')
var noUnnumbered = require('./lib/rules/no-unnumbered-tests')

module.exports = {
  rules: {
    'no-get-contains': noGetContains,
    'no-literal-selectors': noLiteralSelectors,
    'no-long-wait': noLongWait,
    'no-xit': noXit,
    'no-unnumbered-tests': noUnnumbered,
    'no-it-only': noItOnly
  },
  configs: {
    recommended: {
      rules: {
        'cy/no-get-contains': 2,
        'cy/no-literal-selectors': 2,
        'cy/no-long-wait': 2,
        'cy/no-xit': 2,
        'cy/no-unnumbered-tests': 0,
        'cy/no-it-only': 1,
      }
    }
  }
}
