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

      switch (tagName) {
        case 'img':
          $(this).attr('src', content);
          break;
        case 'a':
          if ($(this).attr('data-video-id')) {
            $(this).attr('data-video-id', content);
          } else if ($(this).hasClass('nav-link') || $(this).hasClass('dropdown-item')) {
            $(this).text(content);
          }
          else {
            //$(this).attr('href', content);
            $(this).text(content);
          }
          break;
        case 'h1':
          $(this).text(content);
          break;
        case 'h2':
          $(this).text(content);
          break;
        case 'h3':
          $(this).text(content);
          break;
        case 'h4':
          $(this).text(content);
          break;
        case 'span':
          $(this).text(content);
          break;
        case 'small':
          $(this).text(content);
          break;
        case 'p':
          $(this).text(content);
          break;
        case 'label':
          $(this).text(content);
          break;
        case 'input':
          $(this).attr('placeholder', content);
          break;
        case 'textarea':
          $(this).attr('placeholder', content);
          break;
        case 'button':
          $(this).text(content);
          break;
        case 'li':
            $(this).text(content);
          break;
      }
    });//Each

    //script para camiar video
    switch (lang) {
      case 'en':
        $('#video-en').removeClass('d-none');
        $('#video-es').addClass('d-none');
        $('#video-pt').addClass('d-none');
        break;
      case 'es':
        $('#video-en').addClass('d-none');
        $('#video-es').removeClass('d-none');
        $('#video-pt').addClass('d-none');
        break;
      case 'pt':
        $('#video-en').addClass('d-none');
        $('#video-es').addClass('d-none');
        $('#video-pt').removeClass('d-none');
        break;
    }

    $('.translate').click(function () {

      localStorage.setItem("lang", $(this).attr('id'));

      let lang = $(this).attr('id');
      let doc = json;

      $('.lang').each(function (index, element) {
        let content = doc[lang][$(this).attr('key')];
        let tagName = $(this).get(0).tagName.toLowerCase();

        //Script para traduccir texto y camiar url
        switch (tagName) {
          case 'img':
            $(this).attr('src', content);
            break;
          case 'a':
            if ($(this).attr('data-video-id')) {
              $(this).attr('data-video-id', content);
            } else if ($(this).hasClass('nav-link') || $(this).hasClass('dropdown-item')) {
              $(this).text(content);
            }
            else {
              //$(this).attr('href', content);
              $(this).text(content);
            }
            break;
          case 'h1':
            $(this).text(content);
            break;
          case 'h2':
            $(this).text(content);
            break;
          case 'h3':
            $(this).text(content);
            break;
          case 'h4':
            $(this).text(content);
            break;
          case 'span':
            $(this).text(content);
            break;
          case 'small':
            $(this).text(content);
            break;
          case 'p':
            $(this).text(content);
            break;
          case 'label':
            $(this).text(content);
            break;
          case 'input':
            $(this).attr('placeholder', content);
            break;
          case 'textarea':
            $(this).attr('placeholder', content);
            break;
          case 'button':
            $(this).text(content);
            break;
          case 'li':
            $(this).text(content);
            break;
        }

      }); //Each

      //script para camiar video
      switch (lang) {
        case 'en':
          $('#video-en').removeClass('d-none');
          $('#video-es').addClass('d-none');
          $('#video-pt').addClass('d-none');
          break;
        case 'es':
          $('#video-en').addClass('d-none');
          $('#video-es').removeClass('d-none');
          $('#video-pt').addClass('d-none');
          break;
        case 'pt':
          $('#video-en').addClass('d-none');
          $('#video-es').addClass('d-none');
          $('#video-pt').removeClass('d-none');
          break;
      }
    }); //Funcion click



  });//Get json AJAX
});