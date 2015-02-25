say = require('./say');
Object.prototype.discoverAbilityTo = require('./discoverAbilityTo');

var basicBaseballPlayer = {
  name: 'basicBaseballPlayer',
  throwBall: function(){
    return 'Here comes the flying BALL!!!';
  },
  catchBall: function(){
    return 'got it!';
  }
};

var who = Object.create(basicBaseballPlayer);
who.name = 'who...';
who.position = 'first base';

var what = Object.create(who);
what.name = 'what...'
what.position = 'second base';

var message = what.discoverAbilityTo('throwBall');
say(message);
console.log(message);
