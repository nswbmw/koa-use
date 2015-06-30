var koa = require('koa');
var use = require('./');

var app = use(koa());

app.use([
  function* a(next) {
    console.log('a');
    yield* next;
  },
  function* b(next) {
    console.log('b');
    yield* next;
  }
]);

app.use(function* c() {
  console.log('c');
});

app.listen(3000);