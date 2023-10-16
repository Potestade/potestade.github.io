/*
*   Navbar Links Active State on Scroll:
*/

(function() {
  "use strict";

  const navbarlinks = document.querySelectorAll('#navbar .scrollto');

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }

  window.addEventListener('load', navbarlinksActive);
  window.addEventListener('scroll', navbarlinksActive);
})();

/*
*   Scrolls to an Element with Header Offset
*/

(function() {
  "use strict";

  const scrollto = (el) => {
    let header = document.querySelector('#header');
    let offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20;
    }

    let elementPos = document.querySelector(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  }
})();

/*
*   Toggle .header-scrolled Class on Scroll:
*/

(function() {
  "use strict";

  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    }
    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);
  }
})();

/*
*   Back to Top Button:
*/

// (function() {
//   "use strict";

//   const backtotop = document.querySelector('.back-to-top');
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add('active');
//       } else {
//         backtotop.classList.remove('active');
//       }
//     }
//     window.addEventListener('load', toggleBacktotop);
//     window.addEventListener('scroll', toggleBacktotop);
//   }
// })();


(function() {
  "use strict";

  const backtotop = document.querySelector('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };

    const scrollToTop = (event) => {
      event.preventDefault(); // Prevenir o comportamento padrão do link

      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    backtotop.addEventListener('click', scrollToTop);
    window.addEventListener('load', toggleBacktotop);
    window.addEventListener('scroll', toggleBacktotop);
  }
})();




/*
*   Mobile Nav Toggle:
*/

(function() {
  "use strict";

  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

  mobileNavToggle.addEventListener('click', function(e) {
    document.querySelector('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
})();

/*
*   Mobile Nav Dropdowns Activate:
*/

(function() {
  "use strict";

  const dropdownLinks = document.querySelectorAll('.navbar .dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (document.querySelector('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle('dropdown-active');
      }
    });
  });
})();

/*
*   Scroll with Offset on Links with a Class Name .scrollto:
*/

(function() {
  "use strict";

  const scrollLinks = document.querySelectorAll('.scrollto');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (document.querySelector(this.hash)) {
        e.preventDefault();

        let navbar = document.querySelector('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          let navbarToggle = document.querySelector('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    });
  });
})();

/*
*   Scroll with Offset on Page Load with Hash Links in the URL:
*/

(function() {
  "use strict";

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
})();

/*
*   Preloader:
*/

(function() {
  "use strict";

  const preloader = document.querySelector('#preloader');

  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
})();

/*
*   Initiate GLightbox:
*/

(function() {
  "use strict";

  const glightbox = GLightbox({
    selector: '.glightbox'
  });
})();

/*
*   Initiate Gallery Lightbox:
*/

(function() {
  "use strict";

  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });
})();

/*
*   Testimonials Slider:
*/

(function() {
  "use strict";

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})();

/*
*   Animation on Scroll (using AOS library):
*/

(function() {
  "use strict";

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });
})();

/*
*   Initiate Pure Counter:
*/

(function() {
  "use strict";

  new PureCounter();
})();


/*
*   FIM
*/