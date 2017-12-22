'use strict';

(function($) {

    $(document).ready(function() {
        equalizeHeight();
    });

    //add class .js-eq-height to parent of elements
    function equalizeHeight() {
        var elems = $('.js-eq-height');
        elems.children().height('');
        window.setTimeout(function () {
            elems.each(function () {
                var highest = 0,
                    container = $(this);
                container.children().each(function () {
                    if($(this).height() > highest) {
                        highest = $(this).height();
                    }
                });
                container.children().each(function () {
                    $(this).height(highest);
                });
            });
        }, 500);
    }

}(jQuery));
