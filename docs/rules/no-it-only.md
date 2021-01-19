# Disallow `it.only`

...

## Rule details

:thumbsdown: Any use of the following patterns are considered warnings:

```js
it.only('should do something', () => {})
```

:thumbsup: The following patterns are not warnings:

```js
it('should do something', () => {})
```
