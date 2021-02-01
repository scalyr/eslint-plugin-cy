/**
 *
 * Potential false positive may include calls to any method that is called 'wait' with a literal as a first argument. This rule can not currently distinguish between
 * objects that are created by a call to cypress method and those that are not, especially when crossing file boundaries.
 *
 * For singular false positives, consider ignoring them with line comment. For frequient repeated falce positives, consider switching the rule to 'direct' mode.
 */
module.exports = {
  meta: {
    messages: {
      avoidLiteral: "Avoid using literal selectors in cy.{{method}}({{args}}). Instead use data-test-id's like then cy.{{method}}(createTestId(ELEMENT.testId)) with appropriate test id.",
    },
  },
  create(context) {
    const [ mode = 'direct' ] = context.options;

    return {
      CallExpression(node) {
        if (mode === 'direct' && node.callee.object && node.callee.object.name !== 'cy') {
          return;
        }
        if (
          (
            node.callee.property && node.callee.property.name === 'get'
            && node.arguments[0] && node.arguments[0].type === 'Literal'
          ) || (
            node.callee.property && node.callee.property.name === 'contains'
            && node.arguments.length > 1
            && node.arguments[0] && node.arguments[0].type === 'Literal'
            && node.arguments[1] && node.arguments[1].type !== 'ObjectExpression'
          )
        ) {
          context.report({
            node,
            messageId: 'avoidLiteral',
            data: {
              method: node.callee.property.name,
              args: node.arguments.map((e) => e.raw || e.name).join(', '),
            },
          });
        }
      },
    };
  },
};
