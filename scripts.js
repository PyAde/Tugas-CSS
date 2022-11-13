//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu(){
    tombolMenu.click(function(){
        menu.toggle();
    });
    menu.click(function(){
        menu.toggle();
    });
}
$(document).ready(function(){
    var width = $(window).width();
    if(width < 990) {
        klikMenu();
    }
})

//lebar
$(window).resize(function(){
    var width =  $(window).width();
    if (width > 900){
        menu.css("display","block");

    }else{
        menu.css("display","none");
    }
    klikMenu();
});

$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("yellow");
        }else{
            $("nav").removeClass("yellow");
        }
    })
});