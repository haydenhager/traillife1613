(function($){
  $(function(){

    // Mobile side navigation
    $('.sidenav').sidenav();

    // Close the mobile menu when a link is tapped, then let it navigate
    $('#nav-mobile a').on('click', function(){
      var el = document.querySelector('.sidenav');
      var inst = (window.M && M.Sidenav) ? M.Sidenav.getInstance(el) : null;
      if (inst) { inst.close(); }
    });

    // FAQ accordion
    $('.collapsible').collapsible();

    // Current year in footer
    var y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }

  }); // end of document ready
})(jQuery); // end of jQuery name space
