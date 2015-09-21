// this is you would use $http or $resource to do your API calls to
// the Node backend form your Angular frontend.

angular.module('NerdService', [])
  .factory('Nerd', ['$http', function($http) {
    return {
      // call to get all nerds
      get: function() {
        return $http.get('/api/nerds');
      },

        //these will work when more API routes are defined on the Node 
        //side of things 
      // call to POST and create a new nerd
      create: function(nerdData) {
        return $http.post('/api/nerds', nerdData);
      },

      // call to DELETE a nerd
      delete: function(id) {
        return $http.delete('/api/nerds/' + id);
      }
    };

    /*
      the only function that will work in the NerdService is the get
      function. The other two are just placeholders and they won't work
      unless you define those specific routes in your app/routes.js file.

      These services will call our Node backend, retrieve data in JSON 
      format, and then we can use it in our Angular controllers
    */
  }]);
