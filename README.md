# @unction/aside

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<mixed => mixed> -> mixed -> mixed

Takes a stack of functions, like `pipe()`, but always returns the second argument.

``` javascript
pipe(
  aside([(value) => value.toLowerCase(), console.log]),
  processData
)(
  "Hello, world"
) // "Hello, world"
```

But also logs:

``` javascript
"hello, world"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/aside.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/aside.svg?maxAge=2592000&style=flat-square
