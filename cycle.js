$(".toggle").click(function() {

    $(this).toggleClass('on');
    $("#resize").toggleClass("active");

    });

    var textWrapper = document.querySelector('.header-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.header-1 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 1200 + 50 * i
    });

    var textWrapper = document.querySelector('.brand1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.brand1 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 1200 + 50 * i
    });

    var textWrapper = document.querySelector('.brand2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline()
    .add({
        targets: '.brand2 .letter',
        translateY: [200,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 1200 + 50 * i
    });

    
    TweenMax.to(".box", 2.4, {
        y: "-100%",
        ease: Expo.easeInOut,
        delay: 0.1,
    });
        
    var tl = new TweenMax.staggerFrom(".brand", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 1.1
    });

            
    var tl = new TweenMax.staggerFrom(".toggle", 2, {
        opacity: 0,     
        y: 30,
        ease: Expo.easeInOut,
        delay: 1.1
    });

    var tl = new TweenMax.staggerFrom(".card-container", 2, {
        opacity: 0,     
        y: 20,
        ease: Expo.easeInOut,
        delay: 1.1
    });

    $('.logo-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplayspeed: 2000,
        infiniite: true
    });


