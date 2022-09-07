$("document").ready(function () {
  $(".stack").on("click", function () {
    $("article").addClass("stack");
  });
  $(".grid").on("click", function () {
    $("article").removeClass("stack");
  });
});
