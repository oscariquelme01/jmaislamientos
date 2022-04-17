$(document).ready(function() {
    $('#toggle-menu').click(function(){
        $(this).toggleClass('toggle-menu-active') 
        $('.mobile-menu').toggleClass('slide-menu')
    });
});
