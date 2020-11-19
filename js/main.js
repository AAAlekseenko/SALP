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
});



  // function TFun(){
  //   localStorage.setItem('jopa', document.getElementById('jopa').value);
    
  //   document.getElementById("test").innerHTML = localStorage.getItem("jopa");
  
  // }

// $(document).ready(function(){
//   //при нажатию на любую кнопку, имеющую класс .btn
//   $(".button_main-type").click(function() {
//     //открыть модальное окно с id="myModal"
//     $("#myModalBox").modal('show');
//   });
// });

// function TFun(){
//   $(document).ready(function() {
//     $("#myModalBox").modal('show');
//   });
//   var obj;
//   var data = $('#form').serializeArray().reduce(function(obj, item) {
//     obj[item.name] = item.value;
//     console.error(obj)
//     return(obj);
// }, {});
//   console.error(obj);
// }



$( document ).ready(function(){
  $( ".button_main-form" ).click(function(){ 
    console.error('хуй')
    $("#exampleModalLong").modal('show');// задаем функцию при нажатиии на элемент <button>
    // $( "test" ).submit(); // вызываем событие submit на элементе <form>
  }); })
// function TFun(){
//   $(document).ready(function() {
//       $("#exampleModalLong").modal('show');
// }) 