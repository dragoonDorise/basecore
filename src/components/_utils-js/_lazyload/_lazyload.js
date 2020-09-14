export function lazyload() {
  function isInViewport(el) {
    var position = el.getBoundingClientRect();

    var currentScrollPosition =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      window.innerHeight;
    var elementScrollPosition = position.top;

    if (elementScrollPosition <= currentScrollPosition) {
      return true;
    } else {
      return false;
    }
  }

  function showLazyLoad(el) {
    var startEvent = "bc.animation.started";
    var endEvent = "bc.animation.ended";

    //Start Event
    //if (window.CustomEvent) {
    //  event = new CustomEvent(startEvent, {detail: {some: 'data'}});
    //} else {
    //  event = document.createEvent('CustomEvent');
    //  event.initCustomEvent(startEvent, true, true, {some: 'data'});
    //}
    //el.dispatchEvent(event);

    // We show the real img
    el.setAttribute("src", el.getAttribute("data-src"));

    // We show the real img
    if (el.getAttribute("data-srcset") !== null) {
      el.setAttribute("srcset", el.getAttribute("data-srcset"));
    }

    //We delete the old attr
    el.removeAttribute("data-src");
    el.removeAttribute("data-srcset");
    el.removeAttribute("data-lazyload");

    //We change the CSS clases
    el.classList.add("is-lazyloaded");

    //Ending Event
    // if (window.CustomEvent) {
    //   event = new CustomEvent(endEvent, {detail: {some: 'data'}});
    // } else {
    //   event = document.createEvent('CustomEvent');
    //   event.initCustomEvent(endEvent, true, true, {some: 'data'});
    // }
    // el.dispatchEvent(event);
  }

  //	document.addEventListener('DOMContentLoaded', function() {
  //We load the elements as soon as the document is ready

  var lazyloadElements = document.querySelectorAll(
    "[data-src], [data-srcset], [data-lazyload]"
  );

  if (lazyloadElements.length > 0) {
    Array.prototype.forEach.call(lazyloadElements, function (el, i) {
      if (isInViewport(el) === true) {
        showLazyLoad(el);
      }
    });
  }
  //	});

  //We load the elements as we scroll through the document
  window.addEventListener("scroll", function () {
    var lazyloadElements = document.querySelectorAll(
      "[data-src], [data-srcset], [data-lazyload]"
    );

    if (lazyloadElements.length > 0) {
      Array.prototype.forEach.call(lazyloadElements, function (el, i) {
        if (isInViewport(el) === true) {
          showLazyLoad(el);
        }
      });
    }
  });
}
