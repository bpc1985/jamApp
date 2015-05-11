module.exports = ['$templateCache', function($templateCache) {
  'use strict';

  var fs = require('fs');

  $templateCache.put('template/notifications.html', fs.readFileSync(__dirname + '/../templates/notifications.html', 'utf8'));
  $templateCache.put('template/meetings.html', fs.readFileSync(__dirname + '/../templates/meetings.html', 'utf8'));
  $templateCache.put('template/meeting_create.html', fs.readFileSync(__dirname + '/../templates/meeting_create.html', 'utf8'));
  $templateCache.put('template/matches.html', fs.readFileSync(__dirname + '/../templates/matches.html', 'utf8'));
  $templateCache.put('template/profile.html', fs.readFileSync(__dirname + '/../templates/profile.html', 'utf8'));
  $templateCache.put('template/contact.html', fs.readFileSync(__dirname + '/../templates/contact.html', 'utf8'));
}];
