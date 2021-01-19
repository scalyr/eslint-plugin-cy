module.exports = {
  meta: {
    messages: {
      avoidXit: 'Avoid skipping tests.',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          (node.callee.type === 'Identifier' && node.callee.name === 'xit')
          || (node.callee.type === 'MemberExpression' && node.callee.property?.name === 'skip' && node.callee.object?.name === 'it')
        ) {
          context.report({
            node,
            messageId: 'avoidXit',
          });
        }
      },
    };
  },
};
