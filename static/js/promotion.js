$('#title, #oldPrice, #newPrice, #validFrom, #validTo').on('blur keyup', function () {
  const title = $('#title').val();
  const oldPrice = $('#oldPrice').val();
  const newPrice = $('#newPrice').val();
  const validFrom = $('#validFrom').val();
  const validTo = $('#validTo').val();

  if (title.length > 4 && oldPrice && newPrice && validFrom && validTo) {
    $('#submit').prop('disabled', false);
    return;
  }

  $('#submit').prop('disabled', 'disabled');
});