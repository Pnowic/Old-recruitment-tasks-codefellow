$(function() { //Code starts when DOM is ready to be manipulate

    const secs = $('.secs'),
        mins = $('.mins'),
        hrs = $('.hrs');

    let seconds = 0,
        minutes = 0,
        hours = 0;

    const setTime = () => {

        seconds++;

        if (seconds === 60){
            minutes++;
            seconds = 0
        }

        if (minutes === 60){
            hours++;
            minutes = 0
        }

        (seconds < 10) ? secs.text('0' + seconds) : secs.text(seconds);
        (minutes < 10) ? mins.text('0' + minutes) : mins.text(minutes);
        (hours < 10) ? hrs.text('0' + hours) : hrs.text(hours);

    };

    setInterval(setTime, 1000);
});