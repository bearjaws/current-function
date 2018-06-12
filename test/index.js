const current = require('../index');

function test() {
    console.log(current());
}
class Testing {

    anotherName() {
        console.log(current());
    }
}
let tester = new Testing();
test();

tester.anotherName();
