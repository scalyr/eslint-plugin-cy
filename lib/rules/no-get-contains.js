module.exports = {
  meta: {
    messages: {
      avoidGetContain: 'Avoid using cy.get(selector).contain(text). Instead use cy.contain(selector, text)',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.property && node.callee.property.name === 'contains'
          && node.callee.object.callee && node.callee.object.callee.property && node.callee.object.callee.property.name === 'get'
        ) {
          context.report({
            node,
            messageId: 'avoidGetContain',
          });
        }
      },
    };
  },
};
