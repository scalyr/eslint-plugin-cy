module.exports = {
  meta: {
    messages: {
      avoidUnnumbered: 'Avoid unnumbered tests.',
    },
    fixable: true
  },
  create(context) {
    const matches = [];
    const unnumbered = [];
    return {
      CallExpression(node) {
        if (
          (node.callee.type === 'Identifier' && node.callee.name === 'it')
        ) {
          const match = node.arguments[0].value.match(/^\[\[(\d+).(\d+)\]\] /);
          if (match) {
            matches.push({
              major: match[1],
              minor: match[2],
              node
            });
          } else {
            unnumbered.push(node)
          }
        }
      },
      ['Program:exit']() {
        const biggest = matches.reduce(({ major=0, minor=0 }, item) => {
          // console.log(major, minor, item);
          if (major < item.major) {
            major = item.major
            minor = 1
          }
          if (major === item.major && minor < item.minor) {
            minor = item.minor
          }
          return { major, minor }
        }, {})
        unnumbered.forEach(node => {
          context.report({
            node,
            messageId: 'avoidUnnumbered',
            fix: (fixer) => {
              if (biggest.major && biggest.minor) {
                const quotes = node.arguments[0].raw[0];
                return fixer.replaceText(node.arguments[0], `${quotes}[[${String(biggest.major).padStart(2, '0')}.${String(++biggest.minor).padStart(2, '0')}]] ${node.arguments[0].value}${quotes}`);
              }
            }
          });
        })
      }
    };
  },
};
