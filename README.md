# mofron-effect-backgd
background effect for [mofron](https://github.com/simpart/mofron).<br>

# Install
```bash
npm install mofron-effect-backgd
```

# Sample
```javascript
require('mofron');
let Backgd = require('mofron-effect-backgd');
let Img    = require('mofron-comp-image');

new Img({
    param   : '/path/to/image',
    effect  : new Backgd(),
    visible : true
});
```
