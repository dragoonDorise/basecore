export function buttonTextChange() {
  var dataChangeElements = document.querySelectorAll("[data-original-text]");
  if (dataChangeElements.length > 0) {
    Array.prototype.forEach.call(dataChangeElements, function (el, i) {
      el.addEventListener("click", function () {
        var originalText = this.getAttribute("data-original-text");
        var newText = this.getAttribute("data-new-text");

        //Cambiamos los textos para el próximo click
        this.setAttribute("data-original-text", newText);
        this.setAttribute("data-new-text", originalText);

        this.innerHTML = newText;
      });
    });
  }
}
