function diastic(seed, words) {
    for (var i = 0; i < seed.length; i++) {
        var c = seed.charAt(i);
        
        for (var j = 0; j < words.length; j++) {
            if (words[j].charAt(i) == c) {
                console.log(words[j]);
                break;
            }
        }
    }

}
var srctxt;
var words;

function preload() {
    srctxt = loadStrings('rainbow.txt');
}


function setup() {
    noCanvas();
    srctxt = join(srctxt, ' ');
    words = splitTokens(srctxt, ' ,!.?');
    
    var seed = select("#seed");
    var submit = select("#submit");
    submit.mousePressed(function() {
        
        var phrase = diastic(seed.value(), words);
        //createP(seed.value());
        //createP(srctxt);
    });
}