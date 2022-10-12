var input = $("#input");

input.intlTelInput({
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js"
});

input.on("change", function () {
  input.intlTelInput("setNumber", input.val());
});
