module.exports = ['requests', 'API_URL', function(requests, API_URL){
  'use strict';

  return {
    getProfileByTicketRef: function(ticketRef){
      return requests.get({
        url: API_URL + 'jam_profile.php?ticketref=' + ticketRef
      });
    }
  };
}];