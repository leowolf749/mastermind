/**
 * This is the function that controls the ajax requests and what we 
 * do when we get the response.
 */
Backbone.sync = function (method, model) {
    // We're trying to make a post request.
    if (method === 'create' || method === 'update') {
        // some way for your model to know whether youre doing a new game 
        // request or updating an existing ongoing game
        if (model.get("turns") === 0) {
            const request = new XMLHttpRequest();
            // do new game stuff
        } else {
            const request = new XMLHttpRequest();
            request.open('POST', 'https://peapalace.org');
            request.addEventListener('load', function () {
                const response = JSON.parse(request.responseText);

                // this is what happens when you get a response.
                model.set('carrots', response.carrots);
                model.trigger('change'); // re-render, make sure to call this.
            });

            const body = JSON.stringify({
                peas: model.get('peas'),
            });
            request.send(body); // pass a json string here
        }
    }
};

module.exports = Backbone.Model.extend({
    /* Built-in to Backbone. These are the starting values for each property */
    defaults: {
        peas: 100,
        carrots: 0,
    },

    reset() {
        this.set('turns', 0);
        this.save();
    },

    /* Increase the number of peas by one. Max 115 because reasons. */
    increasePeas: function () {
        // this.peas = this.peas + 1;
        // this.get('peas');            // get the value of 'peas'
        // this.set('peas', 5);         // set number of peas to 5
        if (this.get('peas') < 115) {
            this.set('peas', this.get('peas') + 1); // increase number of peas by 1
            this.save(); // function built in to all models

            // someone clicks increase button (view handler => model handler)
            // model increments # of peas
            // save() - sends the update to the server
            // when we get a response, update the model again
        }
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