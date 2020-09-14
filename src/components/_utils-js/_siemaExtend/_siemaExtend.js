//
//Siema Extend
//
export function siemaExtend() {
  //Next + Prev buttons
  function siemaCreateArrows(object, sliderSelector) {
    document
      .querySelector(".js-siema-prev")
      .addEventListener("click", function () {
        object.prev();
      });
    document
      .querySelector(".js-siema-next")
      .addEventListener("click", function () {
        document.querySelector(".js-siema-prev").removeAttribute("disabled");
        object.next();
      });
  }

  //Nav Dots
  function siemaCreateGroupDots(loop, object, sliderSelector) {
    var slides = document.querySelectorAll(".js-siema-slides > div > div");
    var resolution = window.outerWidth;

    //Definimos el número de Slides que mostramos segun la resolución para proximos cálculos
    if (resolution <= 767) {
      slidesNum = slidesXS;
    } else if (resolution >= 768 && resolution <= 991) {
      slidesNum = slidesSM;
    } else if (resolution >= 992 && resolution <= 1200) {
      slidesNum = slidesMD;
    } else if (resolution >= 1199 && resolution <= 1440) {
      slidesNum = slidesLG;
    } else if (resolution >= 1440) {
      slidesNum = slidesXL;
    }

    //Número de Dots que vamos a mostrar
    dots = parseInt(slides.length) / parseInt(slidesNum);

    //Dividimos entre 2 al estar el loop activo
    if (loop == true) {
      dots = dots / 2;
    }

    // Colocamos los dots en su DOM
    dotsHoler = document.querySelector(".js-siema-dots");

    dotsHoler.innerHTML = "";
    // Solo creamos los dots cuando hay más de uno
    if (dots > 1) {
      for (i = 0; i < dots; i++) {
        child = document.createElement("div");
        child.innerHTML =
          '<button type="button" data-slide="' +
          (parseInt(i + 1) * parseInt(slidesNum) - slidesNum) +
          '" class="js-siema-dot">Slide ' +
          i +
          "</button>";
        child = child.firstChild;
        dotsHoler.appendChild(child);
      }
    }

    //Marcamos los dots con sus estados
    var dots = document.querySelectorAll(".js-siema-dot");

    if (dots.length > 0) {
      Array.prototype.forEach.call(dots, function (el, i) {
        //Marcamos como activo el primero
        if (el.getAttribute("data-slide") == "0") {
          el.classList.add("is-active");
        }

        el.addEventListener("click", function () {
          //Movemos la slide a..
          object.goTo(el.getAttribute("data-slide"));

          //Marcamos como activo y desactivamos el resto
          Array.prototype.forEach.call(el.parentNode.children, function (
            el2,
            i
          ) {
            el2.classList.remove("is-active");
          });

          el.classList.add("is-active");
        });
      });
    }
  }

  //Nav Dots
  function siemaCreateDots(loop, object, sliderSelector) {
    var slides = document.querySelectorAll(".js-siema-slides > div > div");

    //Número de Dots que vamos a mostrar
    dots = slides.length;

    //Dividimos entre 2 al estar el loop activo
    if (loop == true) {
      dots = dots / 2;
    }

    // Colocamos los dots en su DOM
    dotsHoler = document.querySelector(".js-siema-dots");

    dotsHoler.innerHTML = "";
    // Solo creamos los dots cuando hay más de uno
    if (dots > 1) {
      for (i = 0; i < dots; i++) {
        child = document.createElement("div");
        child.innerHTML =
          '<button type="button" data-slide="' +
          i +
          '" class="js-siema-dot">Slide ' +
          i +
          "</button>";
        child = child.firstChild;
        dotsHoler.appendChild(child);
      }
    }

    //Marcamos los dots con sus estados
    var dots = document.querySelectorAll(".js-siema-dot");

    if (dots.length > 0) {
      Array.prototype.forEach.call(dots, function (el, i) {
        //Marcamos como activo el primero
        if (el.getAttribute("data-slide") == "0") {
          el.classList.add("is-active");
        }

        el.addEventListener("click", function () {
          //Movemos la slide a..
          object.goTo(el.getAttribute("data-slide"));

          //Marcamos como activo y desactivamos el resto
          Array.prototype.forEach.call(el.parentNode.children, function (
            el2,
            i
          ) {
            el2.classList.remove("is-active");
          });

          el.classList.add("is-active");
        });
      });
    }
  }
}
