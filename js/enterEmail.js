$(document).ready(function() {

  // set replyto to value of email
  $('#email').on('change', function(e) {
    e.preventDefault();
    $('#replyto').val( $('#email').val() )
  })

  // redirect form after email submissions
  console.log(window.location.href.split('/contact')[0] + '/thanks.html')
  $('#form-redirect').val( window.location.href.split('/contact')[0] + '/thanks.html' )

})
