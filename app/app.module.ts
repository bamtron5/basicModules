namespace bm {
  angular.module('bm', ['ui.router'])
    .config([
      '$locationProvider',
      '$urlRouterProvider',
      '$stateProvider',
      (
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $stateProvider: ng.ui.IStateProvider
      ) => {
        $stateProvider
          .state('emojiList', {
            url: '/',
            templateUrl: 'app/views/emojiList.html',
            controller: bm.controllers.EmojiList,
            controllerAs: 'vm'
          });
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
      }]
    );
}
