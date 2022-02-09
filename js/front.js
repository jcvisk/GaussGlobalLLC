
$(window).scroll(function(){
    if ($("#nav").offset().top > 56) {
        $("#logo").removeClass("img-rps");
        $("#logo").addClass("_img-rps");
    }else{
        $("#logo").addClass("img-rps");
        $("#logo").removeClass("_img-rps");
    }
});
/* Video Modal Control */
$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});

/* Inicializando WOW */
new WOW().init();

/* FECHA DINAMICA PARA EL COPYRIGHT */
copyright = new Date();
update = copyright.getFullYear();
document.getElementById('year').innerHTML = update;


/* JS PARA QUE AGREGUE LA CLASE ACTIVE DINAMICAMENTE */
$('#item1').click(active1);
$('#item2').click(active2);
$('#item3').click(active3);
$('#item4').click(active4);
$('#item5').click(active5);

function active1(){
    if ( !$('#item1').hasClass("active")) {
        $('#item1').addClass("active");

        $("#item2").removeClass("active");
        $("#item3").removeClass("active");
        $("#item4").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active2(){
    if ( !$('#item2').hasClass("active")) {
        $('#item2').addClass("active");

        $("#item1").removeClass("active");
        $("#item3").removeClass("active");
        $("#item4").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active3(){
    if ( !$('#item3').hasClass("active")) {
        $('#item3').addClass("active");

        $("#item1").removeClass("active");
        $("#item2").removeClass("active");
        $("#item4").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active4(){
    if ( !$('#item4').hasClass("active")) {
        $('#item4').addClass("active");

        $("#item1").removeClass("active");
        $("#item2").removeClass("active");
        $("#item3").removeClass("active");
        $("#item5").removeClass("active");

    }
}
function active5(){
    if ( !$('#item5').hasClass("active")) {
        $('#item5').addClass("active");

        $("#item1").removeClass("active");
        $("#item2").removeClass("active");
        $("#item3").removeClass("active");
        $("#item4").removeClass("active");

    }
}

/* JS PARA QUE LOS METATAGAS SEAN DIANMICOS*/
//Asignando dominio a metaTags
var dominio = $(location).attr('hostname');
$('#metatagUrlFacebook').attr('content', dominio)
$('#metatagUrlTwitter').attr('content', dominio)
//Asignando direccion de favicon a metaTags
dominio+="/favicon.png"
$('#metatagFaviconFacebook').attr('content', dominio)
$('#metatagFaviconTwitter').attr('content', dominio)


/*MODAL VIDEO DENTRO DEL CAROUSEL */
$('#newModal4x').click(function () {
    var src = 'https://www.youtube.com/embed/Ei8AKs2lbsg';
    $('#newModal4 iframe').attr('src', src);
});

$('#newModal4').on('hidden.bs.modal', function (event) {
    $('#newModal4 iframe').attr('src', null);
})
