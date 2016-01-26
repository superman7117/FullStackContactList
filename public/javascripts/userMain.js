'use strict';

$(document).ready(init);

function init(){
  $('.container').on('click', '.userLink', sendItemUserPage);
  $('.container').on('click', '.delete', junkIt);
}

function sendItemUserPage(e){
  // e.preventDefault()
  var test = $(this).closest('.row').index().toString();

  console.log('index', test);
  $.get('/users/'+test)
  .done(function(data){
    console.log(data);
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}

function junkIt(e){
  // e.preventDefault()
  var test = $(this).closest('.row').index().toString();

  console.log('index', test);
  $.post('/users/remove/'+test)
  .done(function(data){
    console.log(data);
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}
