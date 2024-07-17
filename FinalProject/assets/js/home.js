

$(document).ready(function() {
    $('#kenburnsSliderContainer').vegas({
        slides: [{
            src: "assets/images/slider/1.jpg"
        }, {
            src: "assets/images/slider/2.jpg"
        }, {
            src: "assets/images/slider/3.jpg"
        }, {
            src: "assets/images/slider/4.jpg"
        }],
        overlay: false,
        transition: 'fade3',
        animation: 'kenburnsUpRight',
        transitionDuration: 1000,
        delay: 10000,
        animationDuration: 20000
    });



    // ScrollIt *
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    })

    


});


