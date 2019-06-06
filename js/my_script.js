$(document).ready(function(){
   //$('tr:nth-child(even)').addClass("orange");
  // $('tr:nth-child(odd)').addClass("yellow");

  /*  $('table th').click(function(){
       $(this).siblings('th').addClass('yellow');
    });

    $('table th').click(function(){
       $(this).siblings('td:not(.yellow)').addClass('yellow');
       });


  /*when table header is clicked , removes selection class from all other table rows and
      adds the selection class to this table headers row only*/
    
     $("th").click(function(){
     	$("tr").children().removeClass("yellow")
    	$(this).siblings().addClass("yellow");

  });



})

