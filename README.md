### Easy way to get the current calling functions name, even with 'use strict'!

Example Usage:
const currentFunction = require('current-function');

```javascript
function withName() {
    console.log(currentFunction());
}
```

returns `withName`

```javascript
class Testing {

    anotherName() {
        console.log(currentFunction());
    }
}

let testing = new Testing();
testing.anotherName();
```

returns `Testing.anotherName`
