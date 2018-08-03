$(function() {

    const number = $('.number'),
        readyTxt = $('.text');

    let counter = 1;

    const interval = setInterval(function () {
        number.text(counter);
        counter ++;
        if (counter > 500) {
            clearInterval(interval);
            readyTxt.text('już się nie zwiększy')
        }
    }, 200);

});

