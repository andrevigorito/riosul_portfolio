$( ".btn-filter-nfs" ).click(function() {
    $(this).toggleClass('active')
    $( ".filter-box" ).slideToggle(200 );
  });

  $( ".icon-menu" ).click(function() {
    $( ".main-menu" ).toggleClass( "ativo" );
  });