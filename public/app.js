(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function () {
    
    let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');

    let guess = document.querySelector('#guess');

    let check = document.querySelector('#check');
    check.addEventListener('click', function () {
         console.log('ready');


         if(checkParam.test(guess.value)) {
             let array = [];
             let currentGuess = guess.value;

             for (let i = 0; i < currentGuess.length; i++) {
                 let nums = parseInt(currentGuess[i]);
                 array.push(nums);
             }
             console.log(array);

                sendGuess(currentGuess);
    

         } else {
             console.log('not working');
         }
    });
   
});
// won't need this once Backbone is implemented
function sendGuess(guess) {
    let request = new XMLHttpRequest();
    request.open('POST', 'url');

    let body = JSON.stringify({
        guess,
    });
    request.send(body);
    console.log('yo');
}


},{}]},{},[1]);
