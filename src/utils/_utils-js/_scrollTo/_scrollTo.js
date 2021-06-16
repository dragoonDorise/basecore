export function scrollTo() {
  document.addEventListener("DOMContentLoaded", function () {
    // DOM Ready

    //toggle

    var dataScrollTo = document.querySelectorAll("[data-id-scroll]");

    if (dataScrollTo.length > 0) {
      Array.prototype.forEach.call(dataScrollTo, function (el, i) {
        el.addEventListener("click", function (event) {
          var srollToID = this.getAttribute("data-id-scroll");
          var scrollToX = document.querySelector(srollToID).offsetTop;
          var scrollToSpeed = this.getAttribute("data-speed");

          // https://codepen.io/Novicell/pen/QpyZer
          function scrollTo(element, to, duration) {
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = (difference / duration) * 10;

            setTimeout(function () {
              element.scrollTop = element.scrollTop + perTick;
              if (element.scrollTop == to) return;
              scrollTo(element, to, duration - 10);
            }, 10);
          }

          scrollTo(document.body, scrollToX, scrollToSpeed);
        });
      });
    }
  }); // Cierre DOM Ready abierto al inicio de la página
}
