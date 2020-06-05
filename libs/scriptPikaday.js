const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  toString(date, format) {
    return moment(date).format(' DD / MM / YYYY');
  }
});