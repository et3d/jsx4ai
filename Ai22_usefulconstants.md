#### Snippet:

    #target Illustrator-22
    #script "rekt"
    "use strict"
    main();
    $.write("rekt")
    $.gc();

    function main(){
        var d,
        d=app.activeDocument;
        d.pathItems.rectangle(0,0,10,10);
    }

0,0 = y,x is TOP LEFT of artboard: contrary to mentionned here https://github.com/jtnimoy/scripting-for-illustrator-tutorial
10,10 = x,y is bot right... WTF inverted!

### ******************************************************

Method geometricBounds represent 2 couples of coordinates that are graphically represented as the selectionned object rectangle
(a1,a2,b1,b2)
Those coordinates takes into account the ORIGINAL artboard's origin. So if you resize the object and clip the artboard: the top left corner would move from the original couple. Obviously it's depending on the origin selector 9 squares.

artboard.rulerorigin can offset from topleft corner

#### Array type
set a variable for a specific array element : if arrayItems[i] is a TextItem array[i].typename is "not defined"... but x= array[i]; x.typename =="TextFrame" => true!
