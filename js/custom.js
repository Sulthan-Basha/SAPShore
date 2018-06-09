/* Fixed Menu */

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 10) {
        //console.log('a');
        $("nav").addClass("fixed-top", 1000);
    } else {
        //console.log('a');
        $("nav").removeClass("fixed-top", 1000);
    }
});

/* Smooth Menu */
$('nav a[href^="#"]').click(function() {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 400);
    return false;
    e.preventDefault();
});

/* Contact Form */
$(document).ready(function(){
$('.thankyou').hide();
$('#form').submit(function(e) {
          $('form').hide('slow');
          $('.thankyou').show('slow');
      });
});
