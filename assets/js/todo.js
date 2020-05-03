// Check off specific Todos by Cliking
$('li').click(function() {
  console.log($(this).css('color'));
  if($(this).css('color')==='rgb(128, 128, 128)') {
   $(this).css({
     color: 'black',
     textDecoration: 'none'
    });
  }
  else {
    $(this).css({
      color: 'rgb(128, 128, 128)',
      textDecoration: 'line-through'
    });
  } 
});