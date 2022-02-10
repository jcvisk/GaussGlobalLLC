$(document).ready(function () {
  $.getJSON("lang/lang.json", function (json) {
    //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }

    let lang = localStorage.getItem("lang");
    let doc = json;

    $('.lang').each(function (index, element) {
      let content = doc[lang][$(this).attr('key')];
      let tagName = $(this).get(0).tagName.toLowerCase();

      switch(tagName){
        case 'img':
          $(this).attr('src', content);
          break;
        case 'a':
          if ($(this).attr('data-video-id')) {
            $(this).attr('data-video-id', content);
          } else {
            $(this).text(content);
          }
          break;
        case 'h2':
          $(this).text(content);
          break;
        case 'span':
          $(this).text(content);
          break;
      }
    });//Each



    $('.translate').click(function () {
      
      localStorage.setItem("lang", $(this).attr('id'));
      
      let lang = $(this).attr('id');
      let doc = json;

      $('.lang').each(function (index, element) {
        let content = doc[lang][$(this).attr('key')];
        let tagName = $(this).get(0).tagName.toLowerCase();


        switch(tagName){
          case 'img':
            $(this).attr('src', content);
            break;
          case 'a':
            if ($(this).attr('data-video-id')) {
              $(this).attr('data-video-id', content);
            } else {
              $(this).text(content);
            }
            break;
          case 'h2':
            $(this).text(content);
            break;
          case 'span':
          $(this).text(content);
          break;
        }
      }); //Each
    }); //Funcion click



  });//Get json AJAX
});