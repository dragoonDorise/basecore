export function textareaAutosize() {
  //document.addEventListener('DOMContentLoaded', function() {
  // DOM Ready

  var textareaAutoSize = document.querySelectorAll("textarea[data-autosize]");

  if (textareaAutoSize.length > 0) {
    Array.prototype.forEach.call(textareaAutoSize, function (el, i) {
      el.addEventListener("keyup", function () {
        //añadimos timeout para evitar lag.
        setTimeout(function () {
          //Reseteamos la altura
          // textareaAutoSize.removeAttribute('style');

          //cogemos altura del scroll
          var textareaHeight = el.scrollHeight;

          //console.log(textareaHeight);

          //Se la aplicamos
          el.style.height = textareaHeight + "px";
        }, 200);
      });
    });
  }
  //}); // Cierre DOM Ready abierto al inicio de la página
}
