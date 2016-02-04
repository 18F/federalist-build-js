/* jshint esnext: true */
/* global browser */

var assert = require('assert');

describe('page title', function() {

  it('should be "JS Build on Federalist"', function*() {

    yield browser.url('/');
    var title = yield browser.getTitle();
    assert.equal(title, 'JS Build on Federalist');

  });

});
