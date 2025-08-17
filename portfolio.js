$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >15){
            $('.navbar').addClass("sticky");
        }else{
             $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 600){
            $('.scroll-btn').addClass("show");
        }else{
             $('.scroll-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed=new Typed(".typing" ,{
        strings: [ "Aspiring Software Engineer","Programmer", "Developer","Explorer", "Designer", "Freelancer", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed=new Typed(".typing-2" ,{
        strings: ["Programmer", "Developer", "Explorer", "Designer", "Freelancer",  "Aspiring Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});