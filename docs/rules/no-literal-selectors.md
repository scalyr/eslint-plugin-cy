# Disallow literals electors

...

## Rule details

:thumbsdown: Any use of the following patterns are considered warnings:

```js
cy.get('.some')
cy.contains('.some', 'text')
```

:thumbsup: The following patterns are not warnings:

```js
cy.get(createTestId(ELEMENT.some))
cy.contains(createTestId(ELEMENT.some), 'text')
```
