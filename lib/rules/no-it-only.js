module.exports = {
  meta: {
    messages: {
      avoidItOnly: 'Avoid using it.only.',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          (node.callee.type === 'MemberExpression' && node.callee.property?.name === 'only' && node.callee.object?.name === 'it')
        ) {
          context.report({
            node,
            messageId: 'avoidItOnly',
          });
        }
      },
    };
  },
};
