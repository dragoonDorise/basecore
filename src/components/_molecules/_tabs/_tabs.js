export function tabs() {
  var tabs = (function () {
    var click = function (e) {
      e.preventDefault();

      //Marcamos el estado en botones
      var tabParent = this.parentNode;

      tabParent.classList.add("is-active");
      tabParent
        .querySelector('[role="tab"]')
        .setAttribute("aria-selected", "true");

      Array.prototype.filter.call(tabParent.parentNode.children, function (
        child
      ) {
        if (child !== tabParent) {
          child.classList.remove("is-active");
          child
            .querySelector('[role="tab"]')
            .setAttribute("aria-selected", "false");
        }
      });

      //Activamos paneles

      var tabContentID = this.getAttribute("aria-controls");
      var el = document.getElementById(tabContentID);

      tabs.show(el);
    };

    var show = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      var startEvent = "bc.is.showing";
      var endEvent = "bc.is.visible";

      //Start Event
      if (window.CustomEvent) {
        event = new CustomEvent(startEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(startEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);

      el.classList.add("is-active");

      //End Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);

      //We hide the siblings
      Array.prototype.filter.call(el.parentNode.children, function (child) {
        if (child !== el) {
          hide(child);
        }
      });
    };

    var hide = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      var startEvent = "bc.is.hiding";
      var endEvent = "bc.is.hidden";

      //Start Event
      if (window.CustomEvent) {
        event = new CustomEvent(startEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(startEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);

      //We hide the siblings
      el.classList.remove("is-active");

      //End Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);
    };

    var bindFunctions = function () {
      var elements = document.querySelectorAll(".nav--tabs [aria-controls]");

      Array.prototype.forEach.call(elements, function (el, i) {
        el.addEventListener("click", click);
      });
    };

    var init = function () {
      bindFunctions();
    };

    return {
      init: init,
      show: show,
    };
  })();

  tabs.init();
}
