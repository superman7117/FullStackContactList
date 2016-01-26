'use strict';

$(document).ready(init);

function init(){
  $('.container').on('click', '.userLink', sendItemUserPage);
}

function sendItemUserPage(){
  var index = $(this).closest('.row').index();
  console.log('index', index);
  $.post('/users', {index: index})
  .done(function(data){
    console.log(data);
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}
