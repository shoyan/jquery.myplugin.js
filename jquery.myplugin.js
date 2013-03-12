;(function($) {
    var elements = this;
    
    elements.each(function() {
        $('body').append('<div>Welcome to the ' + this.innerHTML + ' world!</div>');
    });

    return this;
}) (jQuery);
