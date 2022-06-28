// character counter for map description

$(document).ready(function() {

  $("textarea").on("input", function () {
    const counter = $(this).next().children(".counter");
    const charLength = $(this).val().length;
    const limit = "100";
    const charCount = limit - charLength;

    $(counter).val(charCount);

    if (charCount < 0) {
      $("#counter").css("color", "red");
    } else {
      $("#counter").css("color", "black");
    }
  });
});

$(document).ready(function () {
  $('.toggle').click(function () {
    $('.slide').toggleClass('active');
  });
});

