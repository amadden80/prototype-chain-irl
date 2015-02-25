function discoverAbilityTo(functionName){

  var me = this;

  var message = "\n    Let us find out how to " + functionName + " together... \n \n";

  while(me.__proto__ && !me.hasOwnProperty(functionName)){
    var name = me.name || typeof me;
    var parentName = me.__proto__.name || typeof me.__proto__;

    var message = message += "    I am " + name + " \n      and I don't know how to " + functionName + ".  \n      I will go one step further on the prototype chain to " + parentName + ". \n      Please teach me how to " + functionName + " " + parentName + ".\n \n";
    me = me.__proto__;
  }

  if (me.hasOwnProperty(functionName)){
    var name = me.name || typeof me;
    message += "    I am " + name + " \n      and of course I do know how to " + functionName + "... \n      It goes like this.\n";
  } else {
    message += "    I am the one... the only... null... \n      and we will not be doing any " + functionName + ".";
  }

  return message + "\n";

};

module.exports = discoverAbilityTo;
