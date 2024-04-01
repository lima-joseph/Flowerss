document.addEventListener("DOMContentLoaded", function() {
  // Seleciona o botão pelo seu ID
  var toggleButton = document.getElementById('toggleButton');

  // Estado inicial do .initial_screen (true para visível, false para invisível)
  var isScreenVisible = true; // Presumimos que o .initial_screen é visível inicialmente

  // Adiciona um ouvinte de evento 'click' ao botão
  toggleButton.addEventListener('click', function() {
      // Seleciona o elemento .initial_screen
      var initialScreen = document.querySelector('.initial_screen');

      // Verifica o estado atual e altera a visibilidade
      if(isScreenVisible) {
          initialScreen.style.display = 'none';
          document.body.classList.remove("not-loaded");
          document.title("❤❤❤");
          isScreenVisible = false;
      } else {
          document.title("Quais? 🤔🤔");
          initialScreen.style.display = 'none';
          isScreenVisible = true;
      }
  });
});

