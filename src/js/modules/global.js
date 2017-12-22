'use strict';

(function($) {

    var windowWidth = $(window).width();

    $(document).ready(function() {

    });

    $(window).on('resize', function () {
        if ($(window).width() !== windowWidth) {
            windowWidth = $(window).width();

        }
    });

    $(window).on('load', function () {

    });

}(jQuery));
