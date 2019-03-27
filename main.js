$(document).ready(function(){

    $('#accordion').on('click', 'h4', function(){

        var content = $(this).siblings('.accordion-content');

        if (content.hasClass('accordion-content-show')) {
            content.addClass('accordion-content-hidden');
            content.removeClass('accordion-content-show');
        } else {
            $('.accordion-content').removeClass('accordion-content-show');
            $('.accordion-content').addClass('accordion-content-hidden');
            content.addClass('accordion-content-show');
            content.removeClass('accordion-content-hidden');
        }

    });

    /* var carouselContainer = document.querySelector("#carousel");

    var htmlString = carouselImages.map(function(image) {

        return `
        <div class="carousel-item">

            <div class="change-image-button" id="prev-image-button">
                <p>
                    <i class="fas fa-chevron-left"></i>
                    <i class="fas fa-chevron-left"></i>
                </p>
            </div>

            <div id="carousel-image">
                <img src="${image.image_url}" />
            </div>

            <div class="change-image-button" id="next-image-button">
                <p>
                    <i class="fas fa-chevron-right"></i>
                    <i class="fas fa-chevron-right"></i>
                </p>
            </div>

            <div id="carousel-image-subtitle">
                <p>"${image.title}" by <span>${image.artist}</span>.</p>
            </div>

        </div>
        `

    }).join('');

    console.log(htmlString);

    carouselContainer.innerHTML = htmlString;

    $('#carousel').children('div.carousel-item').addClass('hide-carousel-item');

    $('#carousel').on('click', 'div.change-image-button', function(){



    }); */

})