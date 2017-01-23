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