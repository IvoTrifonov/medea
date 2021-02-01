// export function uploadImage() {
//   const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dd2an9hq9/upload';
//   const PRESET = 'azx2lkxi';
//   let file;

//   $('.imageupload').on('change', function (event) {
//     file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', PRESET);

//     if ($('#title').val().length > 4 && $('#description').val().length > 20) {
//       $('#submit').prop('disabled', false);
//     }

//     axios({
//       url: CLOUDINARY_URL,
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data: formData
//     }).then(image => {
//       $("<input type='text' />").attr({
//         name: 'imageURL',
//         value: image.data.url
//       }).hide().appendTo('#articleForm fieldset');
//     }).catch();
//   });

//   return file;
// }