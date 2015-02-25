say = require('./say');
Object.prototype.discoverAbilityTo = require('./discoverAbilityTo');

var basicTalk = {
  name: 'basic talk',
  greetTheRoom: function(){
    return "Hi there!";
  },
  thankTheRoom: function(){
    return "Thank you very much";
  }
};


var overlyFancyTalk = Object.create(basicTalk);
overlyFancyTalk.name = 'overlyFancyTalk'
overlyFancyTalk.juggle = function(){
  return 'I am throwing these apples like you wouldn\'t believe';
};

// var message = overlyFancyTalk.discoverAbilityTo('stall');
var message = overlyFancyTalk.discoverAbilityTo('thankTheRoom');
say(message);
console.log(message);
