# Enforce `return` statements in callbacks of `ElementArrayFinder` methods

...

## Known Limitations

Sometimes we try to call `.wait` against a reference returned by a function that has no mention of `cy` in the same statement or even worse, was defined in another file. Currently, we have no way of knowing if method `.wait` was called against a Cypress reference. We have two ways the rule can be configured in `.eslintrc`. Direct mode ensures that statement mentions `cy`, indirect mode assumes it without checking. Indirect mode is default one.

## Rule details

:thumbsdown: Any use of the following patterns are considered warnings:

```js
cy.wait(1001)
cy.wait(15000)
```

:thumbsup: The following patterns are not warnings:

```js
cy.wait(100)
cy.wait(1000)
```
