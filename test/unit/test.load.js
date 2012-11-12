module('head.load.js');

function getStyle(ele, styleProp) {
    var y = "";

    if (ele.currentStyle) {
        y = ele.currentStyle[styleProp];
    }
    else if (window.getComputedStyle) {
        y = document.defaultView.getComputedStyle(ele, null).getPropertyValue(styleProp);
    }
    
    return y;
}

asyncTest("css (load)", function () {
    expect(1);
  
    head.ready("test.css", function () {     
        var result = getStyle(document.getElementsByTagName("body")[0], "background-repeat");
        ok(result === "repeat-x", "Filename: ready('test.css')");

        start();
    });

    head.js("assets/test.css");
});

asyncTest("jquery, mootools (trigger via callback)", function() {
    expect(2);
    
    head.js(
        "http://ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js",
        "http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js",
        

        function() {                        
            $j = jQuery.noConflict();
                        
            ok(!!$j("#qunit-header").addClass, "Callback: jQuery");
            ok(!!$$("#qunit-header").addClass, "Callback: Mootools");
            
            start();
        }
    );
});

asyncTest("jquery (trigger via filename)", function () {
    expect(1);
    
    head.ready("jquery.min.js", function() {        
        ok(!!jQuery, "Filename: ready('jquery.min.js')");
        
        start();
    });
    
    
    head.js("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js");    
});


asyncTest('jshint, jquery, knockout (trigger via label)', function () {
    expect(4);
    var key = "123";
    head.js(
        { jshint  : "http://ajax.aspnetcdn.com/ajax/jshint/r07/jshint.js" },
        { jquery  : "http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" },
        { knockout: "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.1.0.js" }
    );

    head.ready("jshint", function () {
        key += "1";
        
        ok(!!JSHINT, "Label: ready('jshint')");
        
        start();
    });
    
    head.ready("jquery", function () {
        key += "2";
        ok(!!jQuery, "Label: ready('jquery')");
        
        start();
    });
    
    head.ready("knockout", function () {
        key += "3";
        ok(!!ko, "Label: ready('knockout')");
        ok(key = "123", "Load order");
        
        start();
    });       
});