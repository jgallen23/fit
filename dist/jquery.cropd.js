/*!
  * jquery.cropd.js - A jQuery plugin that will center and crop images inside a container 
  * v0.0.1
  * https://github.com/jgallen23/cropd
  * copyright JGA 2012
  * MIT License
  */

!function($) {

  $.fn.cropd = function(options) {

    options = $.extend({}, $.fn.cropd.defaults, options);

    var centerImage = function(container, img) {
      var w = img.width();
      var h = img.height();

      var offsetX = 0, 
          offsetY = 0, 
          newWidth = options.maxWidth,
          newHeight = options.maxHeight;

      if (options.maxWidth > w) {
        newWidth = w;
      } else {
        offsetX = (options.maxWidth - w) / 2;
      }

      if (options.maxHeight > h) {
        newHeight = h;
      } else {
        offsetY = (options.maxHeight - h) / 2;
      }

      img.css({
        position: 'relative',
        left: offsetX,
        top: offsetY
      });

      container.css({
        width: newWidth,
        height: newHeight,
        visibility: 'visible'
      });
    };

    return this.each(function() {
      var el = $(this);

      el.css({
        overflow: 'hidden',
        width: options.maxWidth,
        height: options.maxHeight,
        visibility: 'hidden'
      });
      $('img', el).bind('load', function() {
        centerImage(el, $(this));
      });
    });
  };

  $.fn.cropd.defaults = {
  };

}(window.jQuery || window.Zepto);
