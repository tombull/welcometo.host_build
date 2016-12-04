'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var HomeCtrl = function HomeCtrl($scope, $geolocation) {
    'ngInject';

    _classCallCheck(this, HomeCtrl);

    var vm = this;
    vm.$scope = $scope;
    vm.$geolocation = $geolocation;
    vm.$geolocation.getCurrentPosition({
      timeout: 60000
    }).then(function (position) {
      vm.$scope.myPosition = position;
    });
  };

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */


  angular.module('home').controller('HomeCtrl', HomeCtrl);
})();
//# sourceMappingURL=home-controller.js.map
