const rule = require('../../lib/rules/no-xit');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-xit', rule, {
  valid: [
    'it()',
  ],
  invalid: [
    {
      code: 'xit()',
      errors: [{
        messageId: 'avoidXit',
      }],
    },
    {
      code: 'it.skip()',
      errors: [{
        messageId: 'avoidXit',
      }],
    }
  ],
});
