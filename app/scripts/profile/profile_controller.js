module.exports = ['profileData', function(profileData){
  'use strict';

  this.profile = _.first(profileData);
  this.profileImg = {
    'background-image': 'url("http://' + this.profile.photo + '")'
  };

  console.log('this.profileImg: ', this.profileImg);
}];