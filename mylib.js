$(document).ready(function(){
  $(".anchor").hide();
  $(".content").hide();
  $(".anchor" + "#aboutme").show();

  $('a[href^="#"]').on('click', function(event) {
       var target = $(this).attr('href');
       $('.anchor'+target).slideToggle();
       var offset = $(target).offset();
    $("html, body").animate({scrollTop: offset.top}, 100);
   });

   $("#reveal").click(function(){
     $(".content").slideToggle();
   });

   function keyTabChange(event){

    var x = event.key;
    // Unicode for Up = 38
    // Unicode for Right  = 39
    // Unicode for left = 37
    // Uniceode for downn = 40
    var curr_window = window.location.href;	// Get URL of string of webpage location
    i = pages_arr.indexOf(curr_window);	// Get the index of that location in the array of pages

    if (event.key == 38 || event.key == 37 ){	// Previous tab
      if (i == 0){
        i = pages_arr.length - 1;	// If index at first element in array go to end of the array
      }
      else{
        --i;	// All other cases go to previous tab
      }
    }
    else if (event.key == 39 || event.key == 40){ // Next tab
      if (i==pages_arr.length - 1){
               i = 0;	// If index is at last element go to first element of array

      }
      else{
        ++i;	// All other cases go to next tab
      }
    }
    window.location.assign(pages_arr[i]);	// Load page of the URL
  }

    });
