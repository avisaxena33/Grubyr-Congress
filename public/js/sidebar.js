var side = 0;

$(document).ready(function() {
  $('#collapse').click(function() {
    $('.sidebar').toggle('slide', 'right', 500, 'easeOutExpo');

    if (side === 1) {
      $('#collapse').animate({left: '640px', backgroundColor: 'rgba(200, 200, 200, 0.6)', padding: '4px 4px 4px 0', marginTop: '-15px'}, 500);
      side = 0;
    }
    else if (side === 0) {
      $('#collapse').animate({left: '0', backgroundColor: '#0563C1', padding: '35px 6px 35px 0', marginTop: '-50px'}, 500);
      side = 1;
    }

  });
});
