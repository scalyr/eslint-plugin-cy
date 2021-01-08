const rule = require('../../lib/rules/no-get-contains');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-get-contains', rule, {
  valid: [
    'cy.contains(createTestId(Element.some), "a")',
  ],
  invalid: [
    {
      code: 'cy.get(".some").contains("a")',
      errors: [{
        messageId: 'avoidGetContain',
      }],
    },
  ],
});
