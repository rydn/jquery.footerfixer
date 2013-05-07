/*!
 * jquery.footerFixer.js
 * 
 * Footer Fixer jQuery plugin, Keep it down!
 * 
 * Author: @ryandick [http://www.bitbucket.org/ryandick]
 * Released under the MIT Licence
 */
;
(function($, window, document, undefined) {

    var pluginName = 'footerFixer',
        defaults = {
            //  binds to onpageload
            bindToLoad: true
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        //  options extend
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;
        //  plugin init
        this.init();
    }
    //  public properties
    Plugin.prototype = {

        init: function() {
            var $$this = this;
            if (this.options.bindToLoad) {
                $(window).scroll($$this.positionFooter)
               .resize($$this.positionFooter)
                $(window).bind('load', function(){
                    $$this.positionFooter();
                    $($$this.element).css({opacity:0}).show().animate({opacity:1}, 500);
                });
            }else{
                $$this.positionFooter();
                $($$this.element).css({opacity:0}).show().animate({opacity:1}, 500);
            }
        },

        positionFooter: function() {
            $footer = $(this.element);
            footerHeight = $footer.height();
            footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";
            if (($(document.body).height() + footerHeight) < $(window).height()) {
                $footer.css({
                    position: "absolute"
                }).animate({
                    top: footerTop
                });
            } else {
                $footer.css({
                    position: "static"
                });
            }
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);
// Copyright (2013) Ryan Dick (“Author”) and Contributors

// All rights reserved.

// The “Free as in Hugs” License

// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:

// Redistributions of source code must retain the above copyright notice, this list
// of conditions and the following disclaimer.

// Redistributions in binary form must reproduce the above copyright notice, this
// list of conditions and the following disclaimer in the documentation and/or
// other materials provided with the distribution.

// Users of this software are permitted to offer to hug the Author or Contributors,
// free of charge or obligation.

// THIS SOFTWARE AND ANY HUGS ARE PROVIDED BY THE AUTHOR AND CONTRIBUTORS “AS IS”
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL ANYONE BE HELD LIABLE FOR ACTUAL HUGS. IN NO EVENT
// SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
// LONELINESS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
// OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. DON’T BE CREEPY.