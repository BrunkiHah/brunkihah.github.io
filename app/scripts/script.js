(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      document.getElementById("tsparticles").even= "none";
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
  


  



  var btn = document.querySelector( '.btn' );

var btnFront = btn.querySelector( '.btn-front' ),
    btnYes = btn.querySelector( '.btn-back .yes' ),
    btnNo = btn.querySelector( '.btn-back .no' );

btnFront.addEventListener( 'click', function( event ) {
  var mx = event.clientX - btn.offsetLeft,
      my = event.clientY - btn.offsetTop;

  var w = btn.offsetWidth,
      h = btn.offsetHeight;
	
  var directions = [
    { id: 'top', x: w/2, y: 0 },
    { id: 'right', x: w, y: h/2 },
    { id: 'bottom', x: w/2, y: h },
    { id: 'left', x: 0, y: h/2 }
  ];
  
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  
  btn.setAttribute( 'data-direction', directions.shift().id );
  btn.classList.add( 'is-open' );

} );

btnYes.addEventListener( 'click', function( event ) {	
  btn.classList.remove( 'is-open' );
} );

btnNo.addEventListener( 'click', function( event ) {
  btn.classList.remove( 'is-open' );
} );

function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}