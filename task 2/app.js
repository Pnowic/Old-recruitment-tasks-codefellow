$(function() {

    const square = $('.square');

    square.on('click', function () {
        square.css({'width' : square.width() * 2 + 'px',
                    'height': square.height() * 2 + 'px'
            })
    });

    square.on('mouseleave', function () {
        square.removeAttr('style')
    })

});

