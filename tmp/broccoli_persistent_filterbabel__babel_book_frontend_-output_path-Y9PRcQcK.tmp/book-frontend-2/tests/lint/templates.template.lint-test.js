define('book-frontend-2/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('book-frontend-2/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'book-frontend-2/templates/application.hbs should pass TemplateLint.\n\n');
  });
});