$(document).ready(function(){

  var total = "0";
  var isLocked = true;
  $("#result").text(total);
  total="";
  $(".num_button").click(function () {
    if ((total.length > 15)) {
          total = total.replace(/.$/,$(this).text());
          $("#result").text(total);
        }
        else{
    total = total + ($(this).text());
    $("#result").text(total);}
    isLocked = true;
  });

  $(".function_button").click(function(){
    if (isLocked === true){
      total = total + ($(this).text());
      $("#result").text(total);
      isLocked = false;}
      else {
        total = total.replace(/.$/,$(this).text());
        $("#result").text(total);
      }
    });

    $("#equal_button").click(function(){
      if (isLocked === true){
        $("#result").text(eval(total));
        total="";
        isLocked = false;
      }
    });

    $("#clearAll").click(function(){
      total = "0";
      $("#result").text(total);
      total="";
      isLocked = false;
    });

    $("#clear").click(function(){
      total=total.slice(0, -1);
      $("#result").text(total);
    });

    $(".function_button, #equal_button").hover(function(){
      $(this).css('background-color','red');
    }, function() {
      $(this).css("background-color","#FF7F50");
    });

    $(".num_button, #clear, #clearAll ").hover(function(){
      $(this).css('background-color','#FFE4B5');
    }, function() {
      $(this).css("background-color","#FFFAFA");
    });

  });

  
