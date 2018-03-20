$(document).ready(function() {
  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#grey-color").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-color");
  });

  $("button#black-color").click(function() {
    $("body").removeClass();
    $("body").addClass("black-color");
  });
  $("body").removeClass();
  $("button#white").click(function() {
    $("body").addClass("white-background");
  });
});
