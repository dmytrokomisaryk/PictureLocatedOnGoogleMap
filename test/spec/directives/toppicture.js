'use strict';

describe('Directive: topPicture', function () {

  // load the directive's module
  beforeEach(module('pictureLocatedOnGoogleMapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<top-picture></top-picture>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the topPicture directive');
  }));
});
