'use strict';

$(document).ready(init);

function init(){
  $('#makeUser').on('click', sendItemToListPage);
}

function sendItemToListPage(){
  console.log('the button works');
  var newListItem = $('#inputer').val();
  var newEmailItem = $('#email').val();
  var newPhoneItem = $('#phone').val();
  $.post('/users/adduser', {
    newUser: newListItem,
    newEmail: newEmailItem,
    newPhone: newPhoneItem
  })
  .done(function(data){
    console.log(data);
  })
  .fail(function(err) {
     alert('something went wrong :(')
   });
}
