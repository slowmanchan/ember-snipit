import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | snippets', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:snippets');
    assert.ok(route);
  });
});
