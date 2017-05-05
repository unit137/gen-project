'use strict';

(function($) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height();

    $(document).ready(function() {
        
    });

    $(window).resize(function(){
        if ($(window).width() !== windowWidth || $(window).height() !== windowHeight) {
            windowWidth = $(window).width();
            windowHeight = $(window).height();


        }
    });

    $(window).load(function(){

    });

}(jQuery));