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
      // Wait for the close animation to release the body scroll-lock, then
      // scroll. Run it twice: if the lock was still active on the first pass
      // (slower devices), the second pass lands it. Recomputing y each time
      // makes this idempotent, so a successful first jump isn't disturbed.
      setTimeout(function(){ jumpTo(target); }, 320);
      setTimeout(function(){ jumpTo(target); }, 520);
    });

    function jumpTo(target){
      document.body.style.overflow = '';             // release Materialize's lock
      var html = document.documentElement;
      // CSS scroll-behavior:smooth breaks JS scrolling on iOS/WebKit, so
      // disable it for this jump, then restore it.
      var prev = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      var y = target.getBoundingClientRect().top + window.pageYOffset - NAV_H;
      window.scrollTo(0, y);
      if (Math.abs(window.pageYOffset - y) > 2) {    // fallbacks for older WebKit
        html.scrollTop = y;
        document.body.scrollTop = y;
      }
      html.style.scrollBehavior = prev;
    }

    // FAQ accordion
    $('.collapsible').collapsible();

    // Current year in footer
    var y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }

  }); // end of document ready
})(jQuery); // end of jQuery name space
