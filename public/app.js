(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Separation of concerns
 * 
 * Big applications get way, way harder if everything is related to everything else.
 * You can avoid this by somehow 'separating' similar things from unrelated things.
 */
const MastermindModel = require('./models/mastermind');
const MastermindView = require('./views/mastermind');

/* First, create a model. */
// let MastermindModel = 

/* Then work through how to display + interact with the model. */
// let IngredientView = 

window.addEventListener('load', function () {
    let mastermind = new MastermindModel();

    let mainView = new MastermindView({
        /* 
        The 'kingdom' the view is in charge of. All elements within this element 
        are solely controlled by this view. 
        */
        el: document.querySelector('body'), // el = element
        model: mastermind, // model = the model to update when times are changing
    });
});
},{"./models/mastermind":2,"./views/mastermind":3}],2:[function(require,module,exports){
/**
 * This is the function that controls the ajax requests and what we 
 * do when we get the response.
 */
Backbone.sync = function (method, model) {
    // We're trying to make a post request.
    if (method === 'create' || method === 'update') {
        // some way for your model to know whether youre doing a new game 
        // request or updating an existing ongoing game
        if (model.get("turn") === 0) {
            console.log('NEW GAME');
            // const request = new XMLHttpRequest();
            // do new game stuff
        } else {
            const request = new XMLHttpRequest();
            request.open('POST', 'http://dry-depths-93139.herokuapp.com/guess');
            request.addEventListener('load', function () {
                const response = JSON.parse(request.responseText);

                // this is what happens when you get a response.
                model.set('turn', response.turn);
                model.set('guesses', response.guesses);
                model.trigger('change'); // re-render, make sure to call this.
            });

            const body = JSON.stringify({
                turn: model.get('turn'),
                guesses: model.get('guesses'),
            });
            request.send(body); // pass a json string here
        }
    }
};

module.exports = Backbone.Model.extend({
    /* Built-in to Backbone. These are the starting values for each property */
    defaults: {
        turn: 0,
        guesses: [],
    },

    resetModel: function () {
        this.set('turn', 0);
        this.set('guesses', []);
    },

    // reset() {
    //     this.set('turns', 0);
    //     this.save();
    // },

    guess: function (guess) {
        let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');
            
        if(checkParam.test(guess.value)) {
            let array = [];
            let allGuesses = this.get('guesses');
            let currentGuess = guess.value;

            for (let i = 0; i < currentGuess.length; i++) {
                let nums = parseInt(currentGuess[i]);
                array.push(nums);
            }
            console.log(array);
        
            allGuesses.push(array);
            this.set('guesses', allGuesses);
        
            this.save();

        } else {
            alert('Invalid input!\nGuess four numbers from 1-8!');
        }
        this.trigger('change');
    }
});






// *** OLD CODE *** //

// window.addEventListener('load', function () {

//     let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');

//     let guess = document.querySelector('#guess');

//     let check = document.querySelector('#check');
//     check.addEventListener('click', function () {
//          console.log('ready');


//          if(checkParam.test(guess.value)) {
//              let array = [];
//              let currentGuess = guess.value;

//              for (let i = 0; i < currentGuess.length; i++) {
//                  let nums = parseInt(currentGuess[i]);
//                  array.push(nums);
//              }
//              console.log(array);

//             sendGuess(currentGuess);
    

//          } else {
//              console.log('not working');
//          }
//     });
   
// });




// // won't need this once Backbone is implemented
// function sendGuess(guess) {
//     let request = new XMLHttpRequest();
//     request.open('POST', 'url');

//     let body = JSON.stringify({
//         guess,
//     });
//     request.send(body);
//     console.log('yo');
// }


// function Guess() {
    
// }
},{}],3:[function(require,module,exports){
module.exports = Backbone.View.extend({
    /* What should happen at the beginning */
    initialize: function () {
        // second 'this' is confusing, but you always want it.
        // if you wanna know, look up bind()
        this.model.on('change', this.render, this);
    },
    /* Events setup */
    /* IMO weirdest part of Backbone. We must deal with it. */
    events: {
        // '<event name> <element selector>' : '<function name>'
        'click #check': 'inputGuess',
    },

    /* Event handler. This is what happens when someone clicks the button. */
    inputGuess: function () {
        this.model.guess(this.el.querySelector('#guess'));
    },

    /* Not required, but I always make it */
    /* Everything related to displaying stuff in the DOM */
    render: function () {
        
    },
});







// window.addEventListener('load', function () {

//     let checkParam = new RegExp('^[1-8][1-8][1-8][1-8]$');

//     let guess = document.querySelector('#guess');

//     let check = document.querySelector('#check');
//     check.addEventListener('click', function () {
//          console.log('ready');


//          if(checkParam.test(guess.value)) {
//              let array = [];
//              let currentGuess = guess.value;

//              for (let i = 0; i < currentGuess.length; i++) {
//                  let nums = parseInt(currentGuess[i]);
//                  array.push(nums);
//              }
//              console.log(array);

//             sendGuess(currentGuess);
    

//          } else {
//              console.log('not working');
//          }
//     });
   
// });




// // won't need this once Backbone is implemented
// function sendGuess(guess) {
//     let request = new XMLHttpRequest();
//     request.open('POST', 'url');

//     let body = JSON.stringify({
//         guess,
//     });
//     request.send(body);
//     console.log('yo');
// }


// function Guess() {
    
// }
},{}]},{},[1]);
