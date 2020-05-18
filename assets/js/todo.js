// Check off specific Todos by Cliking
$('ul').on("click", 'li', function() {
  $(this).toggleClass('completed')
});

// Click on X to delete Todo
$('ul').on("click", 'span', function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();

})
// Add for new Todo
  $("input[type='text']").keypress(function(e){
    if(e.which=== 13) {
      // grabbing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      // creat a new li and add to ul
      $('ul').append('<li><span>X</span> ' + todoText + '</li>')
    }
  })