(function($) {

  $.fn.fit = function(options) {

    options = $.extend({}, $.fn.fit.defaults, options);
    var count = this.length;
    var complete = 0;

    var centerImage = function(img, parent) {
      var w = img.width();
      var h = img.height();

      var newWidth = parent.width();
      var newHeight = parent.height();

      var offsetX = 0;
      var offsetY = 0;

      
      if (options.resizeParent && newWidth > w) {
        newWidth = w;
      } else {
        offsetX = (newWidth - w) / 2;
      }

      if (options.resizeParent && newHeight > h) {
        newHeight = h;
      } else {
        offsetY = (newHeight - h) / 2;
      }

      img.css({
        position: 'relative',
        left: offsetX,
        top: offsetY
      });

      parent.css({
        visibility: 'visible'
      });
      if (options.resizeParent) {
        parent.css({
          width: newWidth,
          height: newHeight
        });
      }
      img.trigger('fit');
      if (count == ++complete) {
        img.trigger('end');
      }
    };

    return this.each(function() {
      var el = $(this);
      var parent = el.parent();

      parent.css({
        overflow: 'hidden',
        visibility: 'hidden'
      });
      el.bind('load', function() {
        centerImage(el, parent);
      });
    });
  };

  $.fn.fit.defaults = {
    resizeParent: false
  };

})(window.jQuery || window.Zepto);
