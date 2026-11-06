window.__ModuleLoader__.load({
  id: 'dsh-two-row-header',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    // Slot outlets add display:contents wrappers; target their public anchors.
    const row = '[data-slot="conversation.session.header"] > div:has(> [data-conversation-header-corner])';
    const css = `
${row} {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) auto !important;
  row-gap: 6px;
  min-width: 0;
}
${row} > div:has(> nav) {
  grid-column: 1 / -1;
  grid-row: 1;
  flex-wrap: wrap;
  min-width: 0;
  max-width: 100%;
}
${row} > div:has(> nav) > nav {
  max-width: 100%;
}
${row} > div:has(> nav) > div {
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
}
${row} > div:has(> [data-slot="conversation.session.header.utilities"]) {
  grid-column: 1;
  grid-row: 2;
  margin-left: 0 !important;
  flex-wrap: wrap;
  min-width: 0;
  min-height: 30px;
}
${row} > [data-conversation-header-corner] {
  grid-column: 2;
  grid-row: 2;
  align-self: center;
}
${row} [data-slot="conversation.session.header.actions"] > *,
${row} [data-slot="conversation.session.header.utilities"] > * {
  flex-shrink: 0;
  max-width: 100%;
}
`;
    function TwoRowHeader() {
      return h(React.Fragment, null,
        h('span', { 'data-dsh-two-row-header': '', hidden: true, 'aria-hidden': true }),
        h('style', null, css));
    }
    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.slots.inject('conversation.session.header.utilities', () => ctx.slots.register({
          name: 'conversation.session.header.utilities',
          id: 'dsh-two-row-header-v2',
          order: 1000,
        }, TwoRowHeader));
      },
    };
  },
});
