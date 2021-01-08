const rule = require('../../lib/rules/no-literal-selectors');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-literal-selectors', rule, {
  valid: [
    'get(1)',
    'contains(1)',
    'cy.get()',
    'cy.contains()',
    'cy.get(createTestId(Element.some))',
    'cy.contains(createTestId(Element.some), "a")',
    'cy.contains("a")',
    'cy.contains("a", {a:"b"})',
  ],
  invalid: [
    {
      code: 'cy.get(".some")',
      errors: [{
        messageId: 'avoidLiteral',
      }],
    },
    {
      code: 'cy.contains(".some", "a")',
      errors: [{
        messageId: 'avoidLiteral',
      }],
    },
    {
      code: 'cy.contains(".some", some)',
      errors: [{
        messageId: 'avoidLiteral',
      }],
    },
  ],
});
