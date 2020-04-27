    $(function(){
         $(".image_block").hide().slideDown(1000)
     })

     $(function() { 
        
        $(".col").hide().slideToggle(1500)
          
     })

     $(function(){
         $(".image_block").hover(
             fucntion(){
                 $(this).find('img').slideDown(300)
            
         })
     })
     
     