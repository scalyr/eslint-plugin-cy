# Disallow tests without a number infront of the name

...

## Rule details

:thumbsdown: Any use of the following patterns are considered warnings:

```js
it('should do something', () => {})
```

:thumbsup: The following patterns are not warnings:

```js
it('[[22.22]] should do something', () => {})

```
