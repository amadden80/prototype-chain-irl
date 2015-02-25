say = require('./say');
Object.prototype.discoverAbilityTo = require('./discoverAbilityTo');

// **********



// GRAND-FATHER!!!
var grandFather = {};
grandFather.name = 'grandFather';
grandFather.standStrongAndProud = function(){
  return 'just handled it';
};

// FATHER!!!
var father = Object.create(grandFather);
father.name = 'father';
father.notWorry = function(){
  return 'relax...';
};

// ANDREW!!!
var andrew = Object.create(father);
andrew.name = 'Andrew';
andrew.slinkAway = function(){
  return '...this is a nice corner...';
};


var mentalChainOfEvents = andrew.discoverAbilityTo('standStrongAndProud');
say(mentalChainOfEvents);
console.log(mentalChainOfEvents);
