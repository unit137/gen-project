'use strict';

(function($) {

	$(document).ready(function() {
        accordions.init();
        anchors.init();
        inputInteractedClasses.init();
        popups.init();
        tabs.init();
	});

    function onResize() {
        if ($(window).width() !== globals.windowWidth) {
            globals.windowWidth = $(window).width();
        }
    }

    $(window).on('resize', $.throttle(200, onResize));

	$(window).on('load', function () {

	});

}(jQuery));
