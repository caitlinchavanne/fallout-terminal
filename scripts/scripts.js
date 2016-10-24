//global variables
var startView = true, 
    loadView = false, 
    hackView = false, 
    homeView = false, 
    docView = false, 
    signView = false, 
    safeView = false, 
    lockView = false, 
    unlockView = false,
    safeLocked = true;

function lockMech() {
    if (safeLocked) {
        $("#status").html("LOCKED");
        $("#engage").html("[ >Disengage Lock ]");
        
    } else {
        $("#status").html("UNLOCKED");
        $("#engage").html("[ >Engage Lock ]");
    }
}


$(document).ready(function (){
    lockMech();
    // add "user login" text 
    $("#userlogin").text("<User Login- Jackie Hudson>");
    //keyboard navigation
    $(document).keyup(function(){
        if(startView) {
            $("#start-content").hide();
            $("#load-content").show();
            startView = false;
            loadView = true;
            //[type load line 1];
        } else if(loadView) {
            $("#load-content").hide();
            $("#header-content").show();
            $("#hack-content").show();
            loadView = false;
            hackView = true;
        } else if(hackView) {
            $("#hack-content").hide();
            $("#password").hide();
            $("#home-content").show();
            $("#netblock").show();
            $("#cmd").show();
            hackView = false;
            homeView = true;
        } else if(docView) {
            $("#doc-content").hide();
            $("#doc-sign").show();
            signView = true;
            docView = false;
        } else if(signView) {
            $("#doc-sign").hide();
            $("#home-content").show();
            $("#netblock").show();
            signView = false;
            docView = false;
            homeView = true;
        } else if(lockView) {
            safeLocked = true;
            lockMech();
            $("#locking").hide();
            $("#safe-control").show();
            lockView = false;
            safeView = true;
        } else if(unlockView) {
            safeLocked = false;
            lockMech();
            $("#unlocking").hide();
            $("#safe-control").show();
            unlockView = false;
            safeView = true;
        }
    });
    //screen click navigation
    $(document).click(function(){
        if(startView) {
            $("#start-content").hide();
            $("#load-content").show();
            startView = false;
            loadView = true;
            //[type load line 1];
        } else if(loadView) {
            $("#load-content").hide();
            $("#header-content").show();
            $("#hack-content").show();
            loadView = false;
            hackView = true;
        } else if(hackView) {
            $("#hack-content").hide();
            $("#password").hide();
            $("#home-content").show();
            $("#netblock").show();
            $("#cmd").show();
            hackView = false;
            homeView = true;
        } 
    });
    // home "documents" button
    $("#doc-link").click(function() {
        $("#netblock").hide();
        $("#home-content").hide();
        $("#doc-content").show();
        homeView = false;
        docView = true;
    });
    $("#doc-content").click(function(){
        $("#doc-content").hide();
        $("#doc-sign").show();
        docView = false;
        signView = true;
    });
    $("#doc-sign").click(function(){
        $("#doc-sign").hide();
        $("#home-content").show();
        $("#netblock").show();
        signView = false;
        homeView = true;
    });
    //home "safe control" button
    $("#safe-link").click(function(){
        $("#home-content").hide();
        $("#netblock").hide();
        $("#safe-control").show();
        $("#cmd-text").text("Accessing Safe Functions...");
        homeView = false;
        safeView = true;
    });
    //lock button
    $("#engage").click(function(){
        $("#safe-control").hide();
        safeView = false;
        if (safeLocked === true) {
            $("#unlocking").show();
            unlockView = true;
        } else {
            $("#locking").show();
            lockView = true;
        }
    });
    $("#unlocking").click(function(){
        safeLocked = false;
        lockMech();
        $("#unlocking").hide();
        $("#safe-control").show();
        unlockView = false;
        safeView = true;
    });
    $("#locking").click(function(){
        safeLocked = true;
        lockMech();
        $("#locking").hide();
        $("#safe-control").show();
        lockView = false;
        safeView = true;
    });
    $("#safe-back").click(function(){
        $("#safe-control").hide();
        $("#home-content").show();
        $("#netblock").show();
        $("#cmd-text").html("");
        safeView = false;
        homeView = true;
    });
});    