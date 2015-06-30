var test = require('tape');
var koa = require('koa');
var use = require('./');

function* a(next) {
  console.log('a');
  yield* next;
}

function* b(next) {
  console.log('b');
  yield* next;
}

function* c(next) {
  console.log('c');
  yield* next;
}

test('koa-use', function (t) {
  var app = use(koa());

  var m1 = app.use([a, b]);
  var m2 = app.use(c);

  t.deepEqual(app, m1);
  t.deepEqual(app, m2);
  
  t.deepEqual(app.middleware.length, 3);
  t.deepEqual(app.middleware[0], a);
  t.deepEqual(app.middleware[1], b);
  t.deepEqual(app.middleware[2], c);

  t.end();
});
