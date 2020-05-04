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
