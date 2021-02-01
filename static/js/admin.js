let file = null;

const clodunaryURLandPresetOptions = {
  url: '/cloudinary/apiURLandSecret',
  headers: {
    'Content-Type': 'application/json'
  }
}

axios(clodunaryURLandPresetOptions).then(res => {
  const { CLOUDINARY_URL, CLOUDINARY_PRESET } = res.data;

  $('.imageupload').on('change', function (event) {
    file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(image => {
      $("<input type='text' />").attr({
        name: 'imageURL',
        value: image.data.url
      }).hide().appendTo('#articleForm fieldset');
    }).catch();

    if ($('#title').val().length > 4 && $('#description').val().length > 20 && file) {
      setTimeout(() => {
        $('#submit').prop('disabled', false);
      }, 2000)
    }
  });

  $('#title, #description').on('blur keyup', function () {
    if ($('#title').val().length > 4 && $('#description').val().length > 20 && file) {
      $('#submit').prop('disabled', false);
      return;
    }

    $('#submit').prop('disabled', 'disabled');
  });
});

