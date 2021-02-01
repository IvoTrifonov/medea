const username = $('#username');
const password = $('#password');

$('.login-wrapper input').on('blur keyup', function() {
  $('.loginErr').hide();

  const areValid = validate(username.val(), password.val());

  if (areValid) {
    $('#submit').prop('disabled', false); 
    return;
  }

  $('#submit').prop('disabled', 'disabled'); 
});

function validate(username, password) {
  return username.length < 5 || password.length < 6 ? false : true;
}