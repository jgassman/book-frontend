define('book-frontend-2/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n1:45 - Extra semicolon. (semi)\n2:34 - Extra semicolon. (semi)\n3:55 - Extra semicolon. (semi)\n4:42 - Extra semicolon. (semi)\n10:3 - Extra semicolon. (semi)\n12:43 - Extra semicolon. (semi)\n14:19 - Extra semicolon. (semi)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass ESLint\n\n1:38 - Extra semicolon. (semi)\n3:24 - Extra semicolon. (semi)');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n1:48 - Extra semicolon. (semi)\n2:42 - Extra semicolon. (semi)\n7:3 - Extra semicolon. (semi)\n9:20 - Missing space before function parentheses. (space-before-function-paren)\n10:3 - Extra semicolon. (semi)\n12:22 - Extra semicolon. (semi)');
  });
});