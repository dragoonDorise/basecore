export function modal() {
  // Render the page

  var modal = (function () {
    var click = function () {
      var modalTarget = this.getAttribute("data-target");
      modal.show(modalTarget);

      return false;
    };

    var show = function (el) {
      //convertimos string a object si llamamos mediante método
      if (typeof el === "string") {
        el = document.querySelector(el);
      }

      console.log(el);

      var startEvent = "bc.is.showing";
      var endEvent = "bc.is.visible";
      var body = document.querySelector("body");

      //Start Event
      if (window.CustomEvent) {
        event = new CustomEvent(startEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(startEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);

      var modalOverlay = document.querySelector(".modal-overlay");

      modalOverlay.classList.add("is-visible");
      modalOverlay.classList.remove("is-hidden");
      body.classList.remove("modal-is-visible");

      el.classList.add("is-showing");
      el.setAttribute("aria-hidden", "false");

      //Ending Event
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

      el.classList.remove("is-showing");
      el.classList.add("is-hiding");
      el.setAttribute("aria-hidden", "true");

      var animateOut = function () {
        var body = document.querySelector("body");

        body.classList.remove("modal-is-visible");
        document.querySelector(".modal").classList.remove("is-hidden");

        var modalOverlay = document.querySelector(".modal-overlay");

        modalOverlay.classList.remove("is-visible");
        modalOverlay.classList.add("is-hidden");
        el.classList.remove("is-showing");
        el.classList.remove("is-hiding");
        el.classList.remove("now");
      };

      animateOut();

      //Ending Event
      if (window.CustomEvent) {
        event = new CustomEvent(endEvent, { detail: { some: "data" } });
      } else {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(endEvent, true, true, { some: "data" });
      }
      el.dispatchEvent(event);
    };

    var dismiss = function () {
      var modalTarget = "#" + this.closest(".modal").getAttribute("id");
      modal.hide(modalTarget);
    };

    var bindFunctions = function () {
      var child = document.createElement("div");
      child.innerHTML = '<div class="modal-overlay is-hidden"></div>';
      child = child.firstChild;
      document.querySelector("body").appendChild(child);

      var modals = document.querySelectorAll('[data-toggle="modal"]');

      if (modals.length > 0) {
        Array.prototype.forEach.call(modals, function (el, i) {
          el.addEventListener("click", click);
        });
      }

      var dismisses = document.querySelectorAll('[data-dismiss="modal"]');

      if (dismisses.length > 0) {
        Array.prototype.forEach.call(dismisses, function (el, i) {
          el.addEventListener("click", dismiss);
        });
      }
    };

    var init = function () {
      bindFunctions();
    };

    return {
      init: init,
      click: click,
      dismiss: dismiss,
      hide: hide,
      show: show,
    };
  })();

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      modal.init();
    },
    false
  );

  modal.init();
}
