'use strict';

(function($) {

	$(document).ready(function() {
        accordions.init();
        anchors.init();
        inputInteractedClasses.init();
        popups.init();
        tabs.init();
	});

    $(window).on('resize', $.throttle(200, function () {
        if ($(window).width() !== globals.windowWidth) {
            globals.windowWidth = $(window).width();

        }
    }));

	$(window).on('load', function () {

	});

}(jQuery));
