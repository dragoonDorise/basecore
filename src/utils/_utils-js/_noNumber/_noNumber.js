export function noNumber() {
  document.addEventListener("DOMContentLoaded", function () {
    // DOM Ready

    var inputNumberElements = document.querySelectorAll('[type="number"]');

    if (inputNumberElements.length > 0) {
      Array.prototype.forEach.call(inputNumberElements, function (el, i) {
        el.addEventListener("keydown", function () {
          if (event.keyCode > 90 && event.keyCode < 106) {
            return;
          }

          if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {
          } else {
            if (event.keyCode < 48 || event.keyCode > 57) {
              event.preventDefault();
            }
          }
        });
      });
    }
  }); // Cierre DOM Ready abierto al inicio de la página
}
