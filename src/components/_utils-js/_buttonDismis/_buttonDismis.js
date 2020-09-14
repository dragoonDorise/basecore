export function buttonDismis() {
  //	document.addEventListener('DOMContentLoaded', function() {
  var dataDismissElements = document.querySelectorAll("[data-id-dismiss]");

  if (dataDismissElements.length > 0) {
    Array.prototype.forEach.call(dataDismissElements, function (el, i) {
      el.addEventListener("click", function () {
        var idToClose = this.getAttribute("data-id-dismiss");

        if (idToClose) {
          //Que Animación?
          var exitAnimation = this.getAttribute("data-animation");

          //Animación por defecto
          if (exitAnimation === null || exitAnimation === undefined) {
            exitAnimation = "fadeOut";
          }

          // Si el attr es this, es que quiere que se cierre a si mismo.
          if (idToClose === "this") {
            this.parentNode.classList.add("animated", exitAnimation);
          } else {
            document
              .querySelector(idToClose)
              .classList.add("animated", exitAnimation);
          }

          //animatron.animateOut(idToClose, exitAnimation);
        }
      });
    });
  }
  //	});
  // Cierre DOM Ready abierto al inicio de la página
}
