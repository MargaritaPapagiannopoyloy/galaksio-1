/*
* (C) Copyright 2016 SLU Global Bioinformatics Centre, SLU
* (http://sgbc.slu.se) and the B3Africa Project (http://www.b3africa.org/).
*
* All rights reserved. This program and the accompanying materials
* are made available under the terms of the GNU Lesser General Public License
* (LGPL) version 3 which accompanies this distribution, and is available at
* http://www.gnu.org/licenses/lgpl.html
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
* Lesser General Public License for more details.
*
* Contributors:
*     Rafael Hernandez de Diego <rafahdediego@gmail.com>
*     Tomas Klingström
*     Erik Bongcam-Rudloff
*     and others.
*
* THIS FILE CONTAINS THE FOLLOWING MODULE DECLARATION
* - workflow-list
*
*/
(function(){
  var app = angular.module('users.directives.user-session', [
    'ui.bootstrap',
    'users.controllers.user-session'
  ]);


  app.service('loginModal', function ($uibModal, $rootScope) {
    function assignCurrentUser (user) {
      $rootScope.currentUser = userF;
      return user;
    }

    return function() {
      var instance = $uibModal.open({
        templateUrl: 'app/users/user-sign-in.tpl.html'
      })

      return instance.result.then(assignCurrentUser);
    };
  });

  app.directive("sessionToolbar", function() {
    return {
      restrict: 'E',
      replace:true,
      template:
      '      <div class="sessionToolbar" ng-controller="UserSessionController as controller">' +
      '        <div class="dropdown" ng-show="email !== undefined">' +
      '          <button class="btn btn-default dropdown-toggle" id="dropdownMenu1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
      '            <i class="fa fa-user" aria-hidden="true"></i> {{email}}' +
      '            <span class="caret"></span>' +
      '          </button>' +
      '          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">' +
      '            <li class="dropdown-header">Signed in as <b>{{email}}</b></li>' +
      '            <li><a ng-click="controller.signOutButtonHandler()">Sign out</a></li>' +
      '            <li role="separator" class="divider"></li>' +
      '            <li><a href="' + GALAXY_SERVER_URL + '" target="_blank">Go to Galaxy site</a></li>' +
      '          </ul>' +
      '        </div>' +
      '      </div>'
    };
  });

})();
