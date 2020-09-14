export function dropdown() {
  var dropdown = (function () {
    var click = function () {
      parent = this.parentNode;

      if (!parent.classList.contains("dropdown--open")) {
        dropdown.show(parent);
      } else {
        dropdown.hide(parent);
      }
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

      el.classList.add("dropdown--open");
      el.querySelector(".dropdown__menu").setAttribute("aria-expanded", "true");
      el.querySelector('[data-toggle="dropdown"]').setAttribute(
        "aria-expanded",
        "true"
      );

      //End Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);
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

      el.classList.remove("dropdown--open");
      el.querySelector(".dropdown__menu").setAttribute(
        "aria-expanded",
        "false"
      );
      el.querySelector('[data-toggle="dropdown"]').setAttribute(
        "aria-expanded",
        "false"
      );

      //End Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);
    };

    var toggle = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      var button = el.querySelector("[aria-expanded]");

      if (button.getAttribute("aria-expanded") == "true") {
        dropdown.hide(el);
      } else {
        dropdown.show(el);
      }
    };

    var bindFunctions = function () {
      var elements = document.querySelectorAll('[data-toggle="dropdown"]');

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
      hide: hide,
      toggle: toggle,
    };
  })();

  dropdown.init();
}
