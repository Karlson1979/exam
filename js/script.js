$(function () {
    $('#callback-button').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.modal').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.modal').mouseup(function (e) {
      let form = $(".form");
      if (!form.is(e.target) && form.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });