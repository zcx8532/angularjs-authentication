/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('auth')
    .constant('GET_LIST_URL', 'api/getList.json')//'/crm/sheet/getlist'
    .constant('GET_USER_PERMITS', 'api/permits.json')
    .constant('METHOD', 'get')
    .constant('moment', moment);

})();
