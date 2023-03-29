var EnviroCarRestApi = require('./dist/envirocarClient.js');

// import EnviroCarRestApi from './dist/envirocarClient';

var api = new EnviroCarRestApi.AnnouncementsApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAnnouncements(callback);