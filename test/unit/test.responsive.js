/**
 * Unittests: javascript loader
 */

module('head.responsive.js');

test("Detections", function () {
    expect(8);

    ok(typeof head.js        === "function", 'Tested for: head.js');
    ok(typeof head.touch     === "boolean", 'Tested for: head.touch');
    ok(typeof head.screen.width       === "number" , 'Tested for: head.screen.width');
    ok(typeof head.screen.height      === "number" , 'Tested for: head.screen.height');
    ok(typeof head.screen.innerWidth  === "number" , 'Tested for: head.screen.innerWidth');
    ok(typeof head.screen.innerHeight === "number" , 'Tested for: head.screen.innerHeight');
    ok(typeof head.screen.innerWidth  === "number" , 'Tested for: head.screen.innerWidth');
    ok(typeof head.screen.innerHeight === "number" , 'Tested for: head.screen.innerHeight');
});



