module.exports = ['requests', 'API_URL', function(requests, API_URL){
  'use strict';

  return {
    getMeetingsByTicketRef: function(ticketRef){
      return requests.get({
        url: API_URL + 'jam_meetings.php?ticketref=' + ticketRef
      });
    }
  };
}];