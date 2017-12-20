$(document).ready(function() {
  $('#the-button').click(function() {
    $.get("http://localhost:3000/get-a-gif", function (data) {
      $('#paragraph').append(`<img src="${data}"/>`)
    })
  })
})
