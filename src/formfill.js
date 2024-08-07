; (function ($) {

    var defaultOptions = {
        data: {

        },
        complete: function (data) {
            console.log(data);
        },
        parse: function (data) {

        },
        keyMap: {

        }
    };


    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaultOptions, options);
        this.init();
    }


    Plugin.prototype = {
        init: function () {
            var self = this;

            if (typeof this.options.parse === 'function') {
                this.options.parse(this.options.data);
            }

            if ($.isEmptyObject(this.options.data)) {
                return;
            }

            if (typeof this.options.keyMap === 'object') {
                for (var key in this.options.keyMap) {
                    if (this.options.keyMap.hasOwnProperty(key)) {
                        this.options.data[this.options.keyMap[key]] = this.options.data[key];
                    }
                }
            }

            var selector = [
                'input[type="checkbox"][name]',
                'input[type="color"][name]',
                'input[type="date"][name]',
                'input[type="datetime"][name]',
                'input[type="datetime-local"][name]',
                'input[type="email"][name]',
                'input[type="hidden"][name]',
                'input[type="month"][name]',
                'input[type="number"][name]',
                'input[type="password"][name]',
                'input[type="radio"][name]',
                'input[type="range"][name]',
                'input[type="tel"][name]',
                'input[type="text"][name]',
                'input[type="time"][name]',
                'input[type="url"][name]',
                'input[type="week"][name]',
                'select[name]',
                'textarea[name]'
            ];

            selector.forEach(function (item) {
                $(self.element).find(item).each(function (index, e) {
                    var name = $(e).attr('name');
                    var type = $(e).attr('type');

                    // radio
                    if (type && type.toLowerCase() === 'radio') {
                        $(e).attr('checked', $(e).attr('value') === self.options.data[name]);
                    } else {
                        if (self.options.data[name]) {
                            $(e).val(self.options.data[name]);
                        }
                    }

                    //fixed change event
                    $(e).trigger('change');
                });
            });

            if (typeof this.options.complete === 'function') {
                this.options.complete(this.element, this.options.data);
            }
        }
    }

    $.fn.formFill = function (options) {
        return this.each(function () {
            if (!$.data(this, 'formFill')) {
                $.data(this, 'formFill', new Plugin(this, options));
            }
        });
    };

})(jQuery);