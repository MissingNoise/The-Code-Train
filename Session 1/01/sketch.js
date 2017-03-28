var textfield;
var output;
var submit;

function setup() {
    noCanvas();
    // textfield = createInput("Enter Here");
    textfield = select("#story");
    output = select('#output');
    submit = select('#submit');
    submit.mousePressed(newText);
}
function newText() {
    var s = textfield.value();
    //var index = s.indexOf("rainbow", 10);
    //var newText = s.substring(s.length/2, s.length);
    var words = splitTokens(s, ', ');
    for (var i = 0; i < words.length; i++) {
        //createP(words[i])
    }
    
    words = words.sort();
    s = join(words, ' ');
    createP(s)
    //createP(newText)
    
    //createP(s.length);
    //createP(textfield.value());
}