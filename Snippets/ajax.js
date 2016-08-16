var crackDict = 'static/js/dicts/rockyou.json';
var guesses;
// [...]
$.getJSON(crackDict, function (data) {
guesses = data;
if ($("#ppassword").val() !== '')
  $("#ppassword").change();
});
