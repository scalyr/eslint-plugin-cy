const rule = require('../../lib/rules/no-long-wait');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-wait', rule, {
  valid: [
    'cy.wait',
    'wait()',
    'wait(100)',
    {
      // This should still produce error. The fact that it does not is a shortcoming of current implementation.
      code: 'cy.get().wait()',
    },
  ],
  invalid: [
    {
      code: 'cy.wait(1001)',
      errors: [{
        messageId: 'avoidWait',
      }],
    },
    {
      code: 'cy.wait()',
      errors: [{
        messageId: 'avoidWait',
      }],
    },
    {
      code: 'cy.some().wait()',
      options: [{ mode: 'indirect' }],
      errors: [{
        messageId: 'avoidWait',
      }],
    },
  ],
});
