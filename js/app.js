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