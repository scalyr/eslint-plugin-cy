# Enforce `contains` with selector

There's multiple ways you can select an element on the page and check that it contains a certain test.

We recommend doing that in a single `contains` command as it protects us from element reference bewcoming stale between cypress retries.

Cypress only retries the last command so in statement `cy.get('.some').contains('text')` it would only retry the last portion even if the element reference we got from `cy.get('.some')` is no longer on the page and was replaced with another element with the same selector. Contrary, `cy.contains('.some', 'text')` will select a new element reference for each retry.

## Known Limitations

Sometimes we try to check `.contains` against a reference returned by a function that has no mention of `cy` in the same statement or even worse, was defined in another file. Currently, we have no way of knowing if methods `.get` and `.contains` were called against a Cypress reference. We have two ways the rule can be configured in `.eslintrc`. Direct mode ensures that statement mentions `cy`, indirect mode assumes it without checking. Indirect mode is default one.

## Rule details

:thumbsdown: Any use of the following patterns are considered warnings:

```js
cy.get('.some').contains('text')
cy.get(selector).constains(text)
```

:thumbsup: The following patterns are not warnings:

```js
cy.contains('.some', 'text')
```
