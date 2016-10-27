//declare password variable
var password;

//create password bank (add more?)
var passwordBank = ["jazzy", "fuzzy", "fizzy", "doozy", "booze", "kazoo", "juicy", "julep", "jelly", "jello"];

//randomize the password bank sorting
passwordBank.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });

// function to choose password
function choosePass() {
    'use strict';
    var i = Math.floor(Math.random() * passwordBank.length);
    password = passwordBank[i];
}
choosePass();

// declare variable to track remaining attempts
var attemptsRemain = 4;

// function to check remaining attempts and update attempt line
function displayAttempts() {
    
    var a2 = $("#attempt2");
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

//selectable non-letter filler characters
var selectableNonLetters = ["<span class='selectable char'>`</span>", 
                  "<span class='selectable char'>~</span>",
                  "<span class='selectable char'>!</span>",
                  "<span class='selectable char'>@</span>",
                  "<span class='selectable char'>#</span>",
                  "<span class='selectable char'>$</span>",
                  "<span class='selectable char'>%</span>",
                  "<span class='selectable char'>^</span>",
                  "<span class='selectable char'>&</span>",
                  "<span class='selectable char'>*</span>",
                  "<span class='selectable char'>-</span>",
                  "<span class='selectable char'>_</span>",
                  "<span class='selectable char'>=</span>",
                  "<span class='selectable char'>+</span>",
                  "<span class='selectable char'>|</span>",
                  "<span class='selectable char'>:</span>",
                  "<span class='selectable char'>;</span>",
                  "<span class='selectable char'>'</span>",
                  '<span class="selectable char">"</span>',
                  "<span class='selectable char'>,</span>",
                  "<span class='selectable char'>.</span>",
                  "<span class='selectable char'>?</span>",
                  "<span class='selectable char'>/</span>",
                  "<span class='selectable char'>(</span>",
                  "<span class='selectable char'>)</span>",
                  "<span class='selectable char'>{</span>",
                  "<span class='selectable char'>}</span>",
                  "<span class='selectable char'>[</span>",
                  "<span class='selectable char'>]</span>",
                  "<span class='selectable char'><</span>",
                  "<span class='selectable char'>></span>"];

// bracket objects
var par = {open: "<span class='bracket'><span class='selectable char'>(</span>", close: "<span class='selectable char'>)</span></span>"},
    crl = {open: "<span class='bracket'><span class='selectable char'>{</span>", close: "<span class='selectable char'>}</span></span>"},
    squ = {open: "<span class='bracket'><span class='selectable char'>[</span>", close: "<span class='selectable char'>]</span></span>"},
    pnt = {open: "<span class='bracket'><span class='selectable char'><</span>", close: "<span class='selectable char'>></span></span>"};

// bracket object bank
var brackets = [par, crl, squ, pnt];

// sort bracket object bank randomly
brackets.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });

// arrays to hold bracket string characters
var brackStrChar1 = [],
    brackStrChar2 = [],
    brackStrChar3 = [],
    brackStrChar4 = [],
    brackStrChar5 = [],
    brackStrChar6 = [],
    brackStrChar7 = [],
    brackStrChar8 = [],
    brackStrChar9 = [],
    brackStrChar10 = [];
// array to hold the bracket string character arrays
var bracketStringChars = [brackStrChar1, brackStrChar2, brackStrChar3, brackStrChar4, brackStrChar5, brackStrChar6, brackStrChar7, brackStrChar8, brackStrChar9, brackStrChar10];

//function to generate some nonletters into a random bracket pair
function genBracks(z) {
    var x = Math.floor(Math.random() * selectableNonLetters.length);
    var randNonLet = selectableNonLetters[x];
    var ran4 = Math.floor(Math.random() * 4);
    var openBracket = brackets[ran4].open;
    var closeBracket = brackets[ran4].close;
    z.push(openBracket);
    var i = Math.floor((Math.random() * 10) + 1);
    for (var x = 1; x < i; x++ ) {
        z.push(selectableNonLetters[x]);
        selectableNonLetters.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });
    }
    z.push(closeBr);
}
//generate bracket sets into brack string character arrays
for (i = 0; i < bracketStringChars.length; i++) {
    genBracks(bracketStringChars[i]);
    brackets.sort(function (a, b) {'use strict'; return 0.5 - Math.random(); });
}

var joinedBrackets = [];
//join brack arrays into bracket strings into new joined brackets arrays
for (i = 0; i < bracketStringChars.length; i++) {
    var x = bracketStringChars[i].join("");
    joinedBracks.push(x);
}