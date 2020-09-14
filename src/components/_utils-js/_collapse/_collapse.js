export function collapse() {
  var collapse = (function () {
    var click = function (e) {
      e.preventDefault();

      //els
      var elbutton = this;
      var accordion = elbutton.getAttribute("data-parent");
      var collapseTarget = elbutton.getAttribute("data-target");

      var el = document.querySelector(collapseTarget);

      if (accordion) {
        //Accordion special behavior, closing siblings collapses
        var accordionCollapses = document
          .querySelector(accordion)
          .querySelectorAll(".is-visible:not(" + collapseTarget + ")");

        Array.prototype.forEach.call(accordionCollapses, function (el, i) {
          collapse.hide(el, el);
        });
      }

      //We toggle the collapse
      if (elbutton.getAttribute("aria-expanded") == "true") {
        collapse.hide(el);
      } else {
        collapse.show(el);
      }

      //Prevent body anchor if used in <a href></a>
      return false;
    };

    var collapseCheckAutoHide = function () {
      // We set the collapse open if data-responsive-auto-open is present

      var elements = document.querySelectorAll("[data-responsive-auto-open]");

      var windowWidth = window.innerWidth;
      var xsBreak = 767;
      var smBreak = 991;
      var mdBreak = 1439;

      Array.prototype.forEach.call(elements, function (el, i) {
        //console.log(el);

        var autoHide = el.getAttribute("data-responsive-auto-open");

        if (autoHide === "xs" && windowWidth <= xsBreak) {
          collapse.show(el);
        } else if (autoHide === "sm" && windowWidth <= smBreak) {
          collapse.show(el);
        } else if (autoHide === "md" && windowWidth <= mdBreak) {
          collapse.show(el);
        } else {
          collapse.hide(el);
        }
      });
    };

    var show = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      var elbutton = document.querySelector(
        '[data-target="#' + el.getAttribute("id") + '"]'
      );

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

      el.classList.add("is-visible");

      el.setAttribute("aria-expanded", "true");
      elbutton.setAttribute("aria-expanded", "true");

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

      var elbutton = document.querySelector(
        '[data-target="#' + el.getAttribute("id") + '"]'
      );

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

      el.classList.remove("is-visible");

      //animateOut(el, 'is-hidden');

      el.setAttribute("aria-expanded", "false");
      elbutton.setAttribute("aria-expanded", "false");

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

      if (el.getAttribute("aria-expanded") == "true") {
        collapse.hide(el);
      } else {
        collapse.show(el);
      }
    };

    var bindFunctions = function () {
      var elements = document.querySelectorAll('[data-toggle="collapse"]');

      Array.prototype.forEach.call(elements, function (el, i) {
        el.addEventListener("click", click);
      });
    };

    var init = function () {
      bindFunctions();

      return "Collapse init";
    };

    return {
      init: init,
      show: show,
      hide: hide,
      toggle: toggle,
      collapseCheckAutoHide: collapseCheckAutoHide,
    };
  })();

  //Accordions controlados mediante <select>
  var selectCollapses = document.querySelectorAll(
    "select[data-accordion-select]"
  );

  Array.prototype.forEach.call(selectCollapses, function (el, i) {
    el.addEventListener("change", function (e) {
      var optionSelected = el.options[el.selectedIndex].getAttribute(
        "data-target"
      );
      //Trigger click
      var event = document.createEvent("HTMLEvents");
      event.initEvent("click", true, false);
      document.querySelector(optionSelected).dispatchEvent(event);
    });
  });

  // Init auto Hide
  collapse.collapseCheckAutoHide();

  //Resize event
  window.addEventListener("resize", collapse.collapseCheckAutoHide);

  collapse.init(event);
}
