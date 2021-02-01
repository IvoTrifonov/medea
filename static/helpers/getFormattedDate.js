module.exports = function(date, delimiter) {
  let year = +date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = +date.getDate().toString().padStart(2, '0');

  return day + delimiter + month + delimiter + year;
}