$(document).ready(function(){

$("#sentM").click(function(){
    
   let t1=$("#exampleFormControlInput1").val()
   let t2=$("#exampleFormControlInput2").val()
   let t3=$("#exampleFormControlTextarea1").val()

   if(t1 !="" && t2 !="" && t3 !=""){

     $("#warning-1").show(1000).fadeOut(10000)
   }
   else{
       $("#warning-2").show(1000).fadeOut(11000)
   }
})

})