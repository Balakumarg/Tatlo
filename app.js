// var app = angular.module('tatluApp', ['ngRoute','ngMaterial', 'ngMessages','jkuri.datepicker']);

//var app = angular.module('tatluApp', ['ngRoute','jkuri.datepicker']);
var app = angular.module('tatluApp', ['ngRoute','ngAnimate', 'ngAria','ngMessages','ngMaterial','angularUtils.directives.dirPagination','ngFlatDatepicker','mwl.calendar', 'ui.bootstrap', 'colorpicker.module']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('blue') // specify primary color, all

});
app.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    }).when('/nav', {
        templateUrl: 'views/nav.html',
        controller: 'NavController'

    }).when('/usermanagement', {
        templateUrl: 'views/usermanagement.html',
        controller: 'UserManagementController'
    }).when('/formmanagement', {
        templateUrl: 'views/formmanagement.html',
        controller: 'formManagementController'
    }).when('/facility', {
        templateUrl: 'views/facility.html',
        controller: 'FacilityController'
    }).when('/procedure', {
        templateUrl: 'views/procedure.html',
        controller: 'ProcedureController'
    }).when('/visit', {
        templateUrl: 'views/visit.html',
        controller:'VisitController'
    }).when('/patient', {
        templateUrl: 'views/patient.html',
        controller:'PatientController'
    }).when('/patientvisit', {
        templateUrl: 'views/patientvisit.html',
        controller:'PatientvisitController'
    }).when('/allpatients', {
        templateUrl: 'views/allpatients.html',
        controller:'PatientvisitController'
    }) .when('/payment', {
        templateUrl: 'views/payments.html',
        controller:'PaymentController'
    }) .when('/nursehome', {
        templateUrl: 'views/nursehome.html',
        controller:'PaymentController'
    })  .when('/appointment', {
        templateUrl: 'views/calender.html',
        controller:'appointmentController'
    }) .when('/globals', {
        templateUrl: 'views/globals.html',
        controller: 'globalsController'
    }).when('/globals2', {
        templateUrl: 'views/globals2.html',
        controller: 'globals2Controller'
    }).when('/globals3', {
        templateUrl: 'views/globals3.html',
        controller: 'globals3Controller'
    }).when('/message', {
        templateUrl: 'views/messages.html',
        controller: 'messagesController'
    }).when('/patient_demographics', {
        templateUrl: 'views/patient_demographics.html',
        controller: 'PatientdemoController'
    }).when('/managelayout', {
        templateUrl: 'views/managelayout.html',
        controller: 'managelayoutController'
    });
  });

  app.directive('navPage', function() {
  return {
    restrict: 'E',
    templateUrl: '/views/nav.html',
    controller:'NavController'
  };
});


app.directive('fileModel', ['$parse', function ($parse) {
     return {
        restrict: 'A',
        link: function(scope, element, attrs) {
           var model = $parse(attrs.fileModel);
           var modelSetter = model.assign;
  element.bind('change', function(){
     scope.$apply(function(){
        modelSetter(scope, element[0].files[0]);
     });
  });



        }
     };
  }]);

  app.factory('alert', function($uibModal) {

      function show(action, event) {
        return $uibModal.open({
          templateUrl: 'views/modalContent.html',
          controller: function() {
            var vm = this;
            vm.action = action;
            vm.event = event;
          },
          controllerAs: 'vm'
        });
      }

      return {
        show: show
      };

    });

  app.service('fileUpload', ['$http', function ($http) {
this.uploadFileToUrl = function(file, uploadUrl){
 var fd = new FormData();
 fd.append('file', file);

 $http.post(uploadUrl, fd, {
    transformRequest: angular.identity,
    headers: {'Content-Type': undefined}
 })

 .success(function(){
 })

 .error(function(){
 });
}
}]);
