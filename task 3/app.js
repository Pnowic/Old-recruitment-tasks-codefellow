$(function() {

    const startBtn = $('.start-button'),
        closeBtn = $('.close'),
        tabs = $('.tabs-container'),
        content = $('.tab-content-container');
    
    startBtn.add(closeBtn).click (function () {
        closeBtn.removeClass('current'); //it gets current class when clicked. Remove it, to load proper styles when reopen.
        startBtn.toggleClass('inactive');
        tabs.toggleClass('active-flex');
        content.toggleClass('active');
    });

    tabs.children().click(function(){
        let tabId = $(this).attr('data-tab');
        tabs.children().removeClass('current');
        $(this).addClass('current');

        content.children().addClass('inactive');
        $("#"+tabId).removeClass('inactive');
    })

});