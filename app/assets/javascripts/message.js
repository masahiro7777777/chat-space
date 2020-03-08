$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="messages__box">
         <div class="messages__box__info">
           <div class="messages__box__info__talker">
             ${message.user_name}
           </div>
           <div class="messages__box__info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="messages__box__comment">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="messages__box">
         <div class="messages__box__info">
           <div class="messages__box__info__taker">
             ${message.user_name}
           </div>
           <div class="messages__box__info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="messages__box__comment">
          <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    $('form')[0].reset();
  })
  .always(function(){
    $('.new_message__btn__send').prop("disabled",false);
    })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
})
});