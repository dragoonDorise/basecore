export function animatron() {
  var animatron = (function () {
    var animateIn = function (idToShow, showAnimation) {
      var el = document.querySelector(idToShow);
      var startEvent = "bc.animation.in.started";
      var endEvent = "bc.animation.in.ended";

      //Start Event
      if (window.CustomEvent) {
        event = new CustomEvent(startEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(startEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);

      //Quitamos display none
      el.classList.remove("is-hidden");
      el.classList.add("anim-is-showing");

      //Lo mantemos oculto con height 0 y animamos la aparición del elemento
      setTimeout(function () {
        el.classList.remove("anim-is-showing");
        el.classList.add("anim-is-waiting");
      }, 250);

      setTimeout(function () {
        el.classList.add("animated");
        el.classList.add(showAnimation);
      }, 500);

      //Limpiamos las clases de animaciones una vez termine

      var cssClean = function () {
        el.classList.remove("animated");
        el.classList.remove("anim-is-waiting");
        el.classList.remove(showAnimation);
      };

      el.addEventListener("webkitAnimationEnd", cssClean);
      el.addEventListener("oanimationend", cssClean);
      el.addEventListener("msAnimationEnd", cssClean);
      el.addEventListener("animationend", cssClean);

      //End Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);
    };

    var animateOut = function animateOut(idToHide, hideAnimation) {
      //Animación por defecto
      if (hideAnimation === null) {
        hideAnimation = "fadeOut";
      }

      //Convertimos a objeto
      if (typeof idToHide === "object") {
        el = idToHide;
      } else {
        el = document.querySelector(idToHide);
      }

      console.log(typeof el);

      var startEvent = "bc.animation.out.started";
      var endEvent = "bc.animation.out.ended";

      //Start Event
      if (window.CustomEvent) {
        event = new CustomEvent(startEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(startEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);

      // Se anima a opacity 0 animated fadeOut
      el.classList.add("animated");
      el.classList.add(hideAnimation);

      var animationEnd = function () {
        el.classList.add("anim-is-hiding");

        // Se le pone display none is-hidden, timeOut
        // Se eliminan clases de animación animated fadeOut
        setTimeout(function () {
          el.classList.add("is-hidden");
          el.classList.remove("animated");
          el.classList.remove("anim-is-hiding");
          el.classList.remove(hideAnimation);
        }, 1000);
      };

      el.addEventListener("webkitAnimationEnd", animationEnd);
      el.addEventListener("oanimationend", animationEnd);
      el.addEventListener("msAnimationEnd", animationEnd);
      el.addEventListener("animationend", animationEnd);

      //End Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);
    };

    var animateChain = function (animArray) {
      i = 0;
      var delayAnimate = 0;

      animArray.forEach(function (element) {
        idAnimate = document.querySelector(animArray[i][0]);
        delayAnimate += animArray[i][1];
        CSSAnimate = animArray[i][2];

        setTimeout(function () {
          console.log(CSSAnimate);
          idAnimate.classList.add(CSSAnimate);
        }, delayAnimate);

        i++;
      });
    };

    return {
      animateIn: animateIn,
      animateOut: animateOut,
    };
  })();
}
