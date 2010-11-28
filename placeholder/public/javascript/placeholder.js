(function(ctx){
  ctx.placeholder = {
    emulate: function(input){
      var placeholder = input.attr('placeholder');
      if(placeholder){
        toggleOn(input, placeholder);
        input.focus(function(){
          if(input.val() == placeholder)
            input.val('');
        }).blur(function(){
          if(!input.val()){
            toggleOn(input, placeholder);
          }else{
            input.removeClass('placeholder');
          }
        });
      }
    }
  };
  
  function toggleOn(input, placeholder){
    if(input.val() == ''){
      input.val(placeholder);
      input.addClass('placeholder');
    }
  }
})(this);
