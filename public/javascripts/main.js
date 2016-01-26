'use strict';

$(document).ready(init);

function init(){
  $('#makeUser').on('click', sendItemToListPage);
}

function sendItemToListPage(){
  console.log('the button works');
  var newListItem = $('#inputer').val();
  $.post('/addUsers', {newUser: newListItem})
  .done(function(data){
    console.log(data);
  })
  .fail(function(err) {
     alert('something went wrong :(')
   });
}
