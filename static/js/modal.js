$(document).ready(function(){
    modal = document.getElementById('modal')
    openers = document.getElementsByClassName('contact-modal-opener')

    for (var i = 0; i < openers.length; i++) {
        openers[i].addEventListener('click', function(){
            $('#contact-modal').toggleClass('hidden')
            $('#main').toggleClass('modal-blurr')
        }, false)
    }
})




