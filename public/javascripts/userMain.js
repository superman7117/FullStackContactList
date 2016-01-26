'use strict';

$(document).ready(init);

function init(){
  $('.container').on('click', '.userLink', sendItemUserPage);
}

function sendItemUserPage(){
  var test = $(this).closest('.row').index();
  console.log('index', test);
  $.post('/users', {
    newUser: test
  })
  .done(function(data){
    console.log(data);
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}
