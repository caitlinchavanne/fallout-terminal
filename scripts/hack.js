
var password;
var passwordBank = ["jazzy", "fuzzy", "fizzy", "doozy", "booze", "kazoo", "juicy", "julep", "jelly", "jello"];
passwordBank.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });
var lineLengthAll = 12;

function choosePass() {
    'use strict';
    var i = Math.floor(Math.random() * passwordBank.length);
    password = passwordBank[i];
}
choosePass();

var attemptsRemain = 4;

function displayAttempts() {
    var a2 = $("attempt2");
    var a3 = $("#attempt3");
    var a4 = $("#attempt4");
    var att = $("#attempts");

    switch (attemptsRemain) {
        case 4:
            $(a4).show();
            $(a3).show();
            $(a2).show();
            $(att).text("4");
            break;
        case 3:
            $(a4).hide();
            $(att).text("3");
            break;
        case 2:
            $(a4).hide();
            $(a3).hide();
            $(att).text("2");
            break;
        case 1:
            $(a4).hide();
            $(a3).hide();
            $(a2).hide();
            $(att).text("1");
            break;
        default:
            $(att).text("ERROR");
            break;
    }
}

var nonLetters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "|", ":", ";", "'", '"', ",", ".", "?", "/", "(", ")", "{", "}", "[", "]", "<", ">", "&#8726;"];

var par = {open: "(", close:")"},
    crl = {open: "{", close: "}"},
    squ = {open: "[", close: "]"},
    pnt = {open: "<", close: ">"};

var brackets = [par, crl, squ, pnt];
brackets.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });

var brack1 = [], brack2 = [], brack3 = [], brack4 = [], brack5 = [], brack6 = [], brack7 = [], brack8 = [], brack9 = [], brack10 = [];

//function to generate some nonletters into a random bracket pair
function genBracks(z) {
    var x = Math.floor(Math.random() * nonLetters.length);
    var randNonLet = nonLetters[x];
    var ran4 = Math.floor(Math.random() * 4);
    var openBr = brackets[ran4].open;
    var closeBr = brackets[ran4].close;
    z.push(openBr);
    var i = Math.floor((Math.random() * 10) + 1);
    for (var x = 1; x < i; x++ ) {
        z.push(nonLetters[0]);
        nonLetters.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });
    }
    z.push(closeBr);
   
}



//collection of bracket set arrays
var brackSets = [brack1, brack2, brack3, brack4, brack5, brack6, brack7, brack8, brack9, brack10];

//generate 10 bracket sets
for (i = 0; i < brackSets.length; i ++) {
    genBracks(brackSets[i]);
    brackets.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });
}


// wrap all selection types in classed divs
var openDivSel = "<div class='selection'>";
var closeDiv = "</div>";

var brackDivs = [];
for (i = 0; i < brackSets.length; i++) {
    brackDivs.push(openDivSel + brackSets[i].join("") + closeDiv);
}

var passDivs = [];
for (i = 0; i < passwordBank.length; i++) {
    passDivs.push(openDivSel + passwordBank[i] + closeDiv);
}

var charDivs = [];
for (i = 0; i < nonLetters.length; i++) {
    charDivs.push(openDivSel + nonLetters[i] + closeDiv);
}

var brackLines = [];
for (i = 0; i < brackSets.length; i++) {
    brackLines.push(brackDivs[i]);}
//var oth = 12 - brlength;
//for (n = 0; n < oth; n++) {
    //brackLines.push(charDivs[n]);

    brackLines[i].sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });

