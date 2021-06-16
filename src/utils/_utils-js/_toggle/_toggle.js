export function toggle() {
  //	document.addEventListener('DOMContentLoaded', function() {
  // DOM Ready

  //toggle

  var dataToggle = document.querySelectorAll('[data-toggle="toggle"]');

  if (dataToggle.length > 0) {
    Array.prototype.forEach.call(dataToggle, function (el, i) {
      el.addEventListener("click", function (event) {
        //event.preventDefault();

        var idToHide = this.getAttribute("data-id-hide");
        var idToShow = this.getAttribute("data-id-show");

        var dataTimes = this.getAttribute("data-times");

        var showAnimation = this.getAttribute("data-animation-show");
        var hideAnimation = this.getAttribute("data-animation-hide");

        //Si hay datatimes = 0, no hay límite, si hay 1..se limita cambiando el contador a 0

        if (dataTimes == 1) {
          this.setAttribute("data-times", "0");
          document.querySelector(this).classList.add("animated", hideAnimation);
        } else if (dataTimes === 0) {
          return false;
        }

        document
          .querySelector(idToHide)
          .classList.add("animated", hideAnimation);

        var el = document.querySelector(idToHide);

        var animateOut = function () {
          document
            .querySelector(idToShow)
            .classList.add("animated", showAnimation);
        };

        el.addEventListener("webkitAnimationEnd", animateOut);
        el.addEventListener("oanimationend", animateOut);
        el.addEventListener("msAnimationEnd", animateOut);
        el.addEventListener("animationend", animateOut);

        //cambiamos el orden de los atributos
        this.setAttribute("data-id-show", idToHide);
        this.setAttribute("data-id-hide", idToShow);
      });
    });
  }
  //	}); // Cierre DOM Ready abierto al inicio de la página
}
