$(document).ready(function(){

    $('#accordion').on('click', 'h4', function(){

        var content = $(this).siblings('.accordion-content');

        if (content.hasClass('accordion-content-show')) {
            content.addClass('accordion-content-hidden');
            content.removeClass('accordion-content-show');
        } else {
            $('.accordion-content').addClass('accordion-content-hidden');
            content.addClass('accordion-content-show');
            content.removeClass('accordion-content-hidden');
        }

    });
    
})