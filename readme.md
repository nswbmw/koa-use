## koa-use

Overwrite koa's `use()`, add `Array` support.

### Install

    npm i koa-use --save

### Usage

```
var koa = require('koa');
var use = require('koa-use');
...

var app = use(koa());

app.use([
  logger(),
  bodyparser(),
  ...
]);

app.listen(3000);
```

equal to:

```
var koa = require('koa');
...

var app = koa();

app.use(logger());
app.use(bodyparser());
...

app.listen(3000);
```

### Example

    DEBUG=* node --harmony example

### Test

    npm test

### License

MIT