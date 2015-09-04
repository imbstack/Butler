module.exports = (function () {
  var service = {};

  service.isLookingForHelp = function (message) {
    return message.toLowerCase().indexOf('i need help') > -1;
  };

  service.isAskingForHelp = function (message) {
    return message.toLoserCase().indexOf('anyone need help') > -1;
  };

  return service;
}).call(this);