(function($) {
    "use strict";
    jQuery(document).ready(function() {
        
         $(".btn-menu").click(function(){
            $(".menu").show();
        });
        
        $(".btn-close").click(function(){
            $(".menu").hide();
        });
        
        $("#sobre").ready(function(){
                /* Every time the window is scrolled ... */
                $(window).scroll( function(){    
                $("#preload").fadeIn(3000);    
            });
        });

        /* ============== TESTIMONIALS ============== */
        if (jQuery('.testimonials').length) {
            jQuery('.testimonials').each(function() {
                jQuery('ul', this).bxSlider({
                    adaptiveHeight: true,
                    pause: 10000,
                    auto: true,
					controls: false
                });
            });
        }
    });
})(jQuery);
    