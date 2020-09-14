var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (isIE11) {
  formgroups = document.querySelectorAll(".form--material .form__group input");

  Array.prototype.forEach.call(formgroups, function (el, i) {
    if (el.value) {
      el.nextElementSibling.classList.add("ie-up");
    }

    el.addEventListener("focus", function () {
      el.nextElementSibling.classList.add("ie-up");
    });

    el.addEventListener("blur", function () {
      if (!el.value) {
        el.nextElementSibling.classList.remove("ie-up");
      }
    });
  });
}
