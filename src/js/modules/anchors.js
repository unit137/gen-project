'use strict';

(function($) {

    $(document).ready(function() {
        initAnchors();
    });

    function initAnchors() {
        $(document).on('click', '.js-anchor', function (e) {
            var target = $($(this).data('target'));
            e.preventDefault();
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }).on('click', '.js-anchor-link', function (e) {
            var target = $($(this).attr('href'));
            e.preventDefault();
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }).on('click', '.js-to-top', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });
    }

}(jQuery));
