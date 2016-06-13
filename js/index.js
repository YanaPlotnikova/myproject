$('#btn-send').click(function(e) {
  // Please set your email in url field
  $.ajax({
      url: "https://formspree.io/6yanchik9@gmail.com",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>Error!</h1>')
      },
      data: {
             name: username.value,
             email: email.value,
             textmessage: textmessage.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Your message was sent!</h1>')
  } );
  e.preventDefault();
});