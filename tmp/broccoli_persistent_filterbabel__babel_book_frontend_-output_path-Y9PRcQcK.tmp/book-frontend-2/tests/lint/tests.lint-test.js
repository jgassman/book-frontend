define('book-frontend-2/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'test-helper.js should pass ESLint\n\n1:33 - Extra semicolon. (semi)\n2:43 - Extra semicolon. (semi)\n3:53 - Extra semicolon. (semi)\n4:36 - Extra semicolon. (semi)\n6:47 - Extra semicolon. (semi)\n8:8 - Extra semicolon. (semi)');
  });
});