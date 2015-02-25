say = require('./say');
Object.prototype.discoverAbilityTo = require('./discoverAbilityTo');

// **********************

// Worker is a function!
//   When you call the function what happens?!
function Worker(name){
  this.name = name;
  console.log('******WORKER******');
}

// We can call a function!
Worker('Lichard');


// **********************


// Prototype is Object:
//   The 'Worker' function's prototype attribute is an object...
//     who is connected to the great primordial object
Worker.prototype



// **********************

// Primordial Worker Spirit!
Worker.prototype.name = 'The primordial worker spirit'
Worker.prototype.complain = function(){};

// Developer!
var ಠ_ಠ = new Worker('Developer');
ಠ_ಠ.code = function(){};

// Manager!
var manager = Object.create(ಠ_ಠ);
manager.name = 'Manager';
manager.makeMeeting = function(){ return 0; };

// CEO!
var ceo = Object.create(manager);
ceo.name = 'CEO';
ceo.giveSpeech = function(){};

// **********************

// Let's discover abilities!!!!
var message = ceo.discoverAbilityTo('code');
say(message);
console.log(message)
