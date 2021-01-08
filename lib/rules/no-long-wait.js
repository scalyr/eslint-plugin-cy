module.exports = {
  meta: {
    messages: {
      avoidWait: 'Avoid using cy.wait().',
    },
  },
  create(context) {
    const [{ mode = 'direct', max = 1000 } = {}] = context.options;
    return {
      CallExpression(node) {
        if (mode === 'direct' && node.callee.object?.name !== 'cy') {
          return;
        }
        if (
          node.callee.property?.name === 'wait'
          && (!node.arguments[0] || parseInt(node.arguments[0].value, 10) > max)
        ) {
          context.report({
            node,
            messageId: 'avoidWait',
          });
        }
      },
    };
  },
};
