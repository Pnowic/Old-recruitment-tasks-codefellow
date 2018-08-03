$(function() {

    for(let i=1; i<=10; i++){

        const numbers = $('.numbers'),
            nextNumber = $('<span>');

        nextNumber.text(i + " ").css('font-size', '30px');
        i % 2 === 0 ? nextNumber.css('color', 'red') : nextNumber;
        numbers.append(nextNumber);
    }

});
