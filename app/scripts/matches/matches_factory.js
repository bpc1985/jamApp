module.exports = ['requests', 'API_URL', function(requests, API_URL){
  'use strict';

  return {
    getMatchesByTicketRef: function(ticketRef){
      return requests.get({
        url: API_URL + 'jam_match.php?ticketref=' + ticketRef
      });
    }
  };
}];


http://www.jamnow.eu/metch/