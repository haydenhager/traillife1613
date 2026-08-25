(function($){
  $(function(){

    // Mobile side navigation
    $('.sidenav').sidenav();

    // Mobile menu: take full control of in-page links so navigation is
    // reliable on iOS (where the open menu locks scrolling and swallows the
    // default anchor jump). Close the menu, release the lock, then scroll.
    var NAV_H = 66; // fixed nav height
    $('#nav-mobile a[href^="#"]').on('click', function(e){
      var href = this.getAttribute('href');
      var target = (href && href.length > 1) ? document.querySelector(href) : null;
      if (!target) { return; } // leave anything unexpected to default behavior
      e.preventDefault();
      var el = document.querySelector('.sidenav');
      var inst = (window.M && M.Sidenav) ? M.Sidenav.getInstance(el) : null;
      if (inst) { inst.close(); }
      // wait for the close animation to release the body scroll-lock, then scroll
      setTimeout(function(){
        document.body.style.overflow = '';           // ensure scrolling is unlocked
        var y = target.getBoundingClientRect().top + window.pageYOffset - NAV_H;
        // CSS scroll-behavior:smooth breaks JS scrollTo on iOS/WebKit, so
        // disable it for this jump, then restore it.
        var html = document.documentElement;
        var prev = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto';
        window.scrollTo(0, y);
        html.style.scrollBehavior = prev;
      }, 300);
    });

    // FAQ accordion
    $('.collapsible').collapsible();

    // Current year in footer
    var y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }

  }); // end of document ready
})(jQuery); // end of jQuery name space
