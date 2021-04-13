const rule = require('../../lib/rules/no-unnumbered-tests');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('no-unnumbered-tests', rule, {
  valid: [
    'it("[[22.22]] some")',
  ],
  invalid: [
    {
      code: 'it("some")',
      errors: [{
        messageId: 'avoidUnnumbered',
      }],
      output: 'it("some")'
    }, {
      code: 'it("[[22.22]] some"); it("thing")',
      errors: [{
        messageId: 'avoidUnnumbered',
      }],
      output: 'it("[[22.22]] some"); it("[[22.23]] thing")'
    }, {
      code: 'it("some"); it("[[22.22]] thing")',
      errors: [{
        messageId: 'avoidUnnumbered',
      }],
      output: 'it("[[22.23]] some"); it("[[22.22]] thing")'
    }, {
      code: 'it("[[21.01]] some"); it("[[22.02]] thing"); it(\'else\')',
      errors: [{
        messageId: 'avoidUnnumbered',
      }],
      output: 'it("[[21.01]] some"); it("[[22.02]] thing"); it(\'[[22.03]] else\')'
    }
  ],
});
