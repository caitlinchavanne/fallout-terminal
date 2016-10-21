var start = true, load = false, hack = false, home = false, doc = false, sign = false, safe = false, lock = false, unlock = false;




var unlocked = false;

function lockMech() {
    if (unlocked === false) {
        $("#status").html("LOCKED");
        $("#engage").html("[ >Disengage Lock ]");
        
    } else {
        $("#status").html("UNLOCKED");
        $("#engage").html("[ >Engage Lock ]");
    }
}

$(document).ready(function(){
    
    $(document).keyup(function(){
        if(start) {
            $("#start").hide();
            $("#loadcontent").show();
            start = false;
            load = true;
        } else if(load) {
            $("#loadcontent").hide();
            $("#header").show();
            $("#hack-container").show();
            load = false;
            hack = true;
        } else if(hack) {
            $("#password").hide();
            $("#hack-container").hide();
            $("#home").show();
            $("#netblock").show();
            $("#cmd").show();
            hack = false;
            home = true;
        } else if (home) {
            $("#home").hide();
            $("#netblock").hide();
            $("#documents").show();
            home = false;
            doc = true;
        } else if (doc) {
            $("#documents").hide();
            $("#doc-sign").show();
            doc = false;
            sign = true;
        } else if (sign) {
            $("#doc-sign").hide();
            $("#home").show();
            $("#netblock").show();
            sign = false;
            home = true;
        } else if (safe) {
            if (unlocked) {
                $("#safe-control").hide();
                $("#locking").show();
                safe = false;
                lock = true;
            } else {
                $("#safe-control").hide();
                $("#unlocking").show();
                safe = false;
                unlock = true;
            }
        } else if (lock) {
            $("#safe-control").show();
            $("#locking").hide();
            safe = true;
            lock = false;
            unlocked = false;
            lockMech();
        } else if (unlock) {
            $("#safe-control").show();
            $("#unlocking").hide();
            safe = true;
            unlock = false;
            unlocked = true;
            lockMech();
        }
    });
    
    $(document).click(function(){
        if(start) {
            $("#start").hide();
            $("#loadcontent").show();
            start = false;
            load = true;
        } else if(load) {
            $("#loadcontent").hide();
            $("#header").show();
            $("#hack-container").show();
            load = false;
            hack = true;
        } else if(hack) {
            $("#password").hide();
            $("#hack-container").hide();
            $("#home").show();
            $("#netblock").show();
            $("#cmd").show();
            hack = false;
            home = true;
        }
    });
    
    $("span.userlogin").text("<User Login- Jackie Hudson>");
    lockMech();
    
    
    $("#docs").click(function(){
        $("#netblock").hide();
        $("#home").hide();
        $("#documents").show();
        home = false;
        doc = true;
    });

    $("#safe").click(function(){
        $("#netblock").hide();
        $("#home").hide();
        $("#safe-control").show();
        $("#cmd-text").text(" Accessing Safe Functions. . .");
        home = false;
        safe = true;
    });
    
    $("#engage").click(function(){
        if (unlocked) {
            $("#safe-control").hide();
            $("#locking").show();
            safe = false;
            lock = true;
        } else {
            $("#safe-control").hide();
            $("#unlocking").show();
            safe = false;
            unlock = true;
        }
    });
    
    $("#documents").click(function(){
            $("#documents").hide();
            $("#doc-sign").show();
            doc = false;
            sign = true;
    });
    
    $("#doc-sign").click(function(){
            $("#doc-sign").hide();
            $("#netblock").show();
            $("#home").show();
            sign = false;
            home = true;
    });
    
});


