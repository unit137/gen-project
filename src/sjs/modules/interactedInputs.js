'use strict';

var inputInteractedClasses = (function($) {

    return {
        init: function () {
            $('.js-input').each(function () {
                $(this).closest('.form__item').toggleClass('input-text_filled', $(this).val() !== '');
            });
            $(document).on('change DOMAutoComplete keyup keydown', '.js-input', function(e) {
                e.stopPropagation();
                $(this).closest('.form__item').toggleClass('input-text_filled', $(this).val() !== '');
            }).on('focus', '.js-input', function(e) {
                e.stopPropagation();
                $(this).closest('.form__item').addClass('input-text_focused');
            }).on('blur', '.js-input', function(e) {
                e.stopPropagation();
                $(this).closest('.form__item').removeClass('input-text_focused');
            });
        }
    }

})(jQuery);
