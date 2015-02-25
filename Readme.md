###The Prototype Chain… IRL

So…  I decided to give a high-level chat about something important in Javascript and then try to give an example of it… to be remembered…

I anticipate this talk potentially crash and burn… so when that happens… I’ll be ok… and just slink off to the corner in shame.  Slinking off to the corner is a behavior I have and am willing to use it.  

If… you give me your kindest attention… I may decide to not worry about it… since at that moment, the deed will be done…  That’s what my father would do.  He’d say "why worry about the past".  So let me say it this way… If you give me your kind attention and I will not worry… mentally I’ll need to think of my father’s ability to not worry… so I can do that myself.

This all reminds me… my father’s father… during the great depression… he bought a junk school bus… fixed it up himself and tried to make money as a independent bus driver.  


Anyway… I didn’t know this GUY!!  but of course my father did!   So if you all decide to 'boo’ me… I may want to  stand strong and proud in the face of hard times.  Let me say that another way… so if you boo me… I’ll think of my father’s father’s ability to stand strong… and do that...


###insert... ```node family.js```

---

The Prototype Chain!


```javascript
say = require('./say');

var kitten = {};
kitten.meow = function(){ say('meow meow meow', 'princess')};

var cat = {}
cat.clawYou = function(){ say('scratch!', 'princess'); }


cat.clawYou() // ???
kitten.meow() // ???
cat.meow()    // ???

cat.__proto__ = kitten;

cat.meow() // ???
```
