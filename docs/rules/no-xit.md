# Disallow `xit` and `it.skip`

...

## Rule details

:thumbsdown: Any use of the following patterns are considered warnings:

```js
xit('should do something', () => {})
it.skip('should do something', () => {})

```

:thumbsup: The following patterns are not warnings:

```js
it('should do something', () => {})

```
