// Check off specific Todos by Cliking
$('li').click(function() {
  $(this).toggleClass('completed')
});

// Click on X to delete Todo
$('span').click(function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();

})

  $("input[type='text'").keypress(function(e){
    if(e.which=== 13) {
      // grabbing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      // creat a new li and add to ul
      $('ul').append('<li>' + todoText + '</li>')
    }
  })