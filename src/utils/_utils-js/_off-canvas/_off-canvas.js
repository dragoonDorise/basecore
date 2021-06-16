export function offCanvas() {
  var offcanvas = (function () {
    var click = function (e) {
      e.preventDefault();

      var offCanvasTarget = this.getAttribute("data-target");

      offcanvas.toggle(this);
    };

    var toggle = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      //console.log('toggle: '+el);

      htmlTag = document.querySelector("html");
      offCanvasType = el.getAttribute("data-side");

      if (htmlTag.classList.contains("off-canvas-on")) {
        previousOffcanvas = htmlTag.getAttribute("data-off-canvas");

        offcanvas.hide();

        //Si había otro tipo de offcanvas abierto, abrimos el nuevo despues de cerrar el anterior
        if (offCanvasType !== previousOffcanvas) {
          offcanvas.show(el);
        }
      } else {
        offcanvas.hide(el);
        offcanvas.show(el);
      }
    };

    //Mostramos offcanvas
    var show = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      //console.log('show: '+el);

      offCanvasTarget = el.getAttribute("data-target");
      offCanvasType = el.getAttribute("data-side");
      offCanvasPush = el.getAttribute("data-push");

      offCanvasOverlay = document.querySelector(".off-canvas-overlay");

      offCanvasOverlay.classList.add("is-visible");
      offCanvasOverlay.classList.remove("is-hidden");

      //Comporbamos si el canvas empujara el contenido
      if (offCanvasPush == "true") {
        offCanvasCSS = "off-canvas-on--push";
      } else {
        offCanvasCSS = "off-canvas-on--overlay";
      }

      //Seteamos el tipo de canvas que es, de esta manera los canvas pueden cambiar su origen de forma dinámica

      document
        .querySelector(offCanvasTarget)
        .classList.add("off-canvas--" + offCanvasType);

      //Abrimos el canvas
      setTimeout(function () {
        document
          .querySelector("html")
          .setAttribute("data-off-canvas", offCanvasType);
        document
          .querySelector("html")
          .classList.add(
            "off-canvas-on",
            "off-canvas-on--" + offCanvasType,
            offCanvasCSS
          );

        var startEvent = "bc.is.showing";
        var endEvent = "bc.is.visible";

        //Start Event
        //if (window.CustomEvent) {
        //  event = new CustomEvent(startEvent, {detail: {some: 'data'}});
        //} else {
        //  event = document.createEvent('CustomEvent');
        //  event.initCustomEvent(startEvent, true, true, {some: 'data'});
        //}
        //el.dispatchEvent(event);

        el.classList.add("is-active");

        //End Event
        //if (window.CustomEvent) {
        //  event = new CustomEvent(endEvent, {detail: {some: 'data'}});
        //} else {
        //  event = document.createEvent('CustomEvent');
        //  event.initCustomEvent(endEvent, true, true, {some: 'data'});
        //}
        //el.dispatchEvent(event);
      }, 500);
    };

    //Ocultamos offcanvas
    var hide = function (el) {
      //console.log('hide: '+el);

      var offCanvasOverlay = document.querySelector(".off-canvas-overlay");

      offCanvasOverlay.classList.add("is-hidden");
      offCanvasOverlay.classList.remove("is-visible");

      document
        .querySelector("html")
        .classList.remove(
          "off-canvas-on",
          "off-canvas-on--left",
          "off-canvas-on--right",
          "off-canvas-on--top",
          "off-canvas-on--bottom",
          "off-canvas-on--push"
        );

      //document.querySelector('.off-canvas').classList.remove('off-canvas--left','off-canvas--right','off-canvas--top','off-canvas--bottom');

      var startEvent = "bc.is.hiding";
      var endEvent = "bc.is.hidden";

      //Start Event
      //// if (window.CustomEvent) {
      ////   event = new CustomEvent(startEvent, {detail: {some: 'data'}});
      //// } else {
      ////   event = document.createEvent('CustomEvent');
      ////   event.initCustomEvent(startEvent, true, true, {some: 'data'});
      //// }
      //// el.dispatchEvent(event);

      //We hide the siblings
      el.classList.remove("is-active");

      //End Event
      // if (window.CustomEvent) {
      //   event = new CustomEvent(endEvent, {detail: {some: 'data'}});
      // } else {
      //   event = document.createEvent('CustomEvent');
      //   event.initCustomEvent(endEvent, true, true, {some: 'data'});
      // }
      // el.dispatchEvent(event);
    };

    var bindFunctions = function () {
      //Overlay

      if (!document.querySelector(".off-canvas-overlay")) {
        var child = document.createElement("div");
        child.innerHTML = '<div class="off-canvas-overlay is-hidden"></div>';
        child = child.firstChild;
        document.querySelector("body").appendChild(child);

        document
          .querySelector(".off-canvas-overlay")
          .addEventListener("click", hide);
      }

      //Botón para mostrar off-canvas
      var jsOffCanvas = document.querySelectorAll(".js-off-canvas");

      Array.prototype.forEach.call(jsOffCanvas, function (el, i) {
        el.addEventListener("click", click);
      });

      //Boton de ocultar off-canvas
      var jsCloseOffCanvas = document.querySelectorAll(".js-close-off-canvas");

      Array.prototype.forEach.call(jsCloseOffCanvas, function (el, i) {
        el.addEventListener("click", hide);
      });
    };

    var init = function () {
      bindFunctions();
    };

    return {
      init: init,
      show: show,
      hide: hide,
      toggle: toggle,
    };
  })();

  offcanvas.init();
}
