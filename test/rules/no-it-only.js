const rule = require('../../lib/rules/no-it-only');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-it-only', rule, {
  valid: [
    'it()',
  ],
  invalid: [
    {
      code: 'it.only("a")',
      errors: [{
        messageId: 'avoidItOnly',
      }],
    },
  ],
});
