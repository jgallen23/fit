(function($) {

  $.fn.fit = function(options) {

    options = $.extend({}, $.fn.fit.defaults, options);
    var count = this.length;
    var complete = 0;

    var centerImage = function(img, parent) {
      var w = img.width();
      var h = img.height();

      var containerWidth = parent.width();
      var containerHeight = parent.height();

      var offsetX = 0;
      var offsetY = 0;

      if (options.resize) {
        var ratio = w / h;
        var newWidth = 0;
        var newHeight = 0;

        if (ratio > 1) {
          h = containerWidth * h / w;
          w = containerWidth;
        } else {
          w = containerHeight * w / h;
          h = containerHeight;
        }
        img.css({
          width: w,
          height: h
        });
      }

      if (options.resizeParent && containerWidth > w) {
        containerWidth = w;
      } else {
        offsetX = (containerWidth - w) / 2;
      }

      if (options.resizeParent && containerHeight > h) {
        containerHeight = h;
      } else {
        offsetY = (containerHeight - h) / 2;
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
          width: containerWidth,
          height: containerHeight
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
      if (el[0].complete || el[0].readyState == 4) {
        centerImage(el, parent);
      } else {
        el.bind('load', function() {
          centerImage(el, parent);
        });
      }
    });
  };

  $.fn.fit.defaults = {
    resizeParent: false,
    resize: false
  };

})(window.jQuery || window.Zepto);
