var child_process = require('child_process');

function say(sentence, voice){
  var voice = voice || 'Daniel';
  child_process.exec('say "' + sentence + '" -v ' + voice);
};

module.exports = say;
