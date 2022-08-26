(function () {
   const toastEl = document.getElementById('ready')
   const readyToast = new bootstrap.Toast(toastEl)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/assets/js/service-worker.min.js", { scope: "/assets/js/" })
      .then(() => readyToast.show());
  } else {
    console.log("CLIENT: service worker is not supported.");
  }
  let deferredPrompt;
  const addBtn = document.querySelector(".add-button");
  if (addBtn) {
    addBtn.style.display = "none";

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();

      deferredPrompt = e;

      addBtn.style.display = "block";

      addBtn.addEventListener("click", () => {
        addBtn.style.display = "none";

        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted GrayScale");
          } else {
            console.log("User dismissed GrayScale");
          }
          deferredPrompt = null;
        });
      });
    });
  }
})();
