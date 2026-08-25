(function($){
  $(function(){

    // Mobile side navigation
    $('.sidenav').sidenav();

    // FAQ accordion
    $('.collapsible').collapsible();

    // Current year in footer
    var y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }

  }); // end of document ready
})(jQuery); // end of jQuery name space
