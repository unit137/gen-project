'use strict';

(function($) {

    $(document).ready(function() {
        initPopups();
    });

    function initPopups() {
        var popup = $('.popup'),
            body = $('body'),
            showPopup = function (target) {
                popup.removeClass('popup_close-animation').addClass('popup_active');
                $('#' + target).addClass('popup__item_active');
                body.addClass('_popup-active');
            },
            hidePopup = function () {
                popup.addClass('popup_close-animation');
                window.setTimeout(function () {
                    $('.popup__item_active').removeClass('popup__item_active');
                    popup.removeClass('popup_active');
                }, 200);
                body.removeClass('_popup-active');
            };

        if (popup.length) {
            $(document).on('click', '.js-popup', function (e) {
                e.preventDefault();
                var targetPopup = $(this).data('popup');
                if ($('.popup__item_active').length) {
                    hidePopup();
                    window.setTimeout(function () {
                        showPopup(targetPopup);
                    }, 250)
                } else {
                    showPopup(targetPopup);
                }
            }).on('click', '.popup__overlay', function () {
                hidePopup();
            }).on('click', '.popup__item', function (e) {
                e.stopPropagation();
            }).on('click', '.popup__close', function (e) {
                e.preventDefault();
                hidePopup();
            });
        }
    }

}(jQuery));
