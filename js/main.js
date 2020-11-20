$(document).ready(function(){
    $('.carousel__wrapper').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,

              }
            },
          ]
    });
  });

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var blockId = $(this).attr("href"),
        st = $(blockId).offset().top;
    $('html, body').animate({scrollTop: st}, 1000);
  });
  
  $('.jq-form').submit(function(event) {
    event.preventDefault();
    $("#jq-modal").modal('show');
    var data = $(this).serializeArray().reduce(function(str, item){
      var row = 'Your ' + item.name + ':' + safeTagsReplace(item.value) + "<br />";

      return str + row;
    },"");
  
    $(".jq-text").html(data);
  });
  var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
  }

  function safeTagsReplace(str) {
    if(!str) return '';
    return str.replace(/[&<>]/g, replaceTag);
  }


});

