#target Illustrator-22
#script "rekt"
"use strict"
main();
$.write("rekt")
$.gc();

function main(){
    var d,
    i,
    x,
    y,
    ab,
    bot,
    rig;
    
    d=app.activeDocument;
    d.pathItems.rectangle(-20,0,20,10);
    
    /*a = d.Artboards[0];
    ab=d.Artboards[0].geometricBounds;
    bot = ab[3];
    rig = ab[2];
    
    for (i=0;i<100;i++){
        x=i%rig;
        y=i%bot;
        d.pathItems.rectangle(x,y,10,10);
    }*/
}
