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