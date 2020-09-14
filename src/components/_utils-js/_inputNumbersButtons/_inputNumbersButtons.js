export function inputNumbersButtons() {
  document.addEventListener("DOMContentLoaded", function () {
    // DOM Ready

    var inputNumberButtons = document.querySelectorAll(
      "input[type=number][data-controls]"
    );

    if (inputNumberButtons > 0) {
      Array.prototype.forEach.call(inputNumberButtons, function (el, i) {
        console.log(el);

        if (el.getAttribute("data-controls") !== undefined) {
          el.insertAdjacentHTML(
            "afterend",
            '<button type="button" class="input-more addon" title="Aumentar">+</button>'
          );
          el.insertAdjacentHTML(
            "beforebegin",
            '<button type="button" class="input-less addon" title="Reducir">-</button>'
          );
        }
      });

      var inputNumberButtonMore = document.querySelector(".input-more");

      inputNumberButtonMore.addEventListener("click", function (event) {
        //Evitamos que se cierre el dropdown
        event.stopPropagation();
        event.preventDefault();

        //Tenemos en cuenta el limite
        var curLimit = this.previousElementSibling.getAttribute("max");
        var curVal = this.previousElementSibling.value;

        if (curLimit == curVal) {
          return false;
        }

        curVal = parseFloat(curVal);
        this.previousElementSibling.value = curVal + 1;
      });

      var inputNumberButtonLess = document.querySelector(".input-less");
      inputNumberButtonLess.addEventListener("click", function (event) {
        //Evitamos que se cierre el dropdown
        event.stopPropagation();
        event.preventDefault();

        //Tenemos en cuenta el limite
        var curLimit = this.nextElementSibling.getAttribute("min");
        var curVal = this.nextElementSibling.value;

        if (curLimit == curVal) {
          return false;
        }

        curVal = parseFloat(curVal);
        this.nextElementSibling.value = curVal - 1;
      });
    }
  }); // Cierre DOM Ready abierto al inicio de la página
}
