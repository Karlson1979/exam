

  <button id="show-modal" class="btn">Открыть</button>
  
    // создаём модальное окно
    var modal = $modal();
    // при клике по кнопке #show-modal
    document.querySelector('#show-modal').addEventListener('click', function(e) {
      // отобразим модальное окно
      modal.show();
    });
  