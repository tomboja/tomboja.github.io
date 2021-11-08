
$(document).ready(function () {
  let lost = false
  let started = false
  let end = false
  $(".boundary").on("mouseover", function () {
    $(".boundary").addClass("youlose")
    lost = true
    $("#status").text("Sorry, you lost!, Click on 'S' to restart")
  })
  $("#start").on("click", function () {
    $(".boundary").removeClass("youlose")
    if (lost) {
      $("#status").text("Restarted!")
    }
    started = true
  })

  if (!lost) {
    $("#start").on("mouseover", function () {
      $("#end").on("mouseover", function () {
        $("#status").text("You won!")
        end = true
      })
    })
  }

  $('#maze').on('mouseleave', function () {
    $(".boundary").addClass("youlose")
    $("#status").text("Sorry, you lost!, Click on 'S' to restart")
  })

});
