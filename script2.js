!(function () {
  "use strict";
  var e = document.querySelector("#mainNav");
  if (e) {
    var o = e.querySelector(".navbar-collapse");
    if (o) {
      var n = new bootstrap.Collapse(o, { toggle: !1 }),
        t = o.querySelectorAll("a");
      for (var a of t)
        a.addEventListener("click", function (e) {
          n.hide();
        });
    }
    var r = function () {
      (void 0 !== window.pageYOffset
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop) > 100
        ? e.classList.add("navbar-shrink")
        : e.classList.remove("navbar-shrink");
    };
    r(), document.addEventListener("scroll", r);
  }
  let a;
  "serviceWorker" in navigator
    ? navigator.serviceWorker
        .register("/assets/js/service-worker.min.js", { scope: "/assets/js/" })
        .then(() => console.log("CLIENT: sw registration complete."))
    : console.log("CLIENT: service worker is not supported.");
  const c = document.querySelector(".add-button");
  (c.style.display = "none"),
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault(),
        (a = e),
        (c.style.display = "block"),
        c.addEventListener("click", () => {
          (c.style.display = "none"),
            a.prompt(),
            a.userChoice.then((e) => {
              "accepted" === e.outcome
                ? console.log("User accepted GrayScale")
                : console.log("User dismissed GrayScale"),
                (a = null);
            });
        });
    });
})();
