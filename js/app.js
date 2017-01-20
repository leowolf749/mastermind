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

