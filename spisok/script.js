var m = new Array( "Виктор Крылов", "Евгений Хашин", "Лидия Хашина","Сергей Авдеев","Антон Сысоев","Павел Симаков")
$(document).ready(function(){
  $("#btn1").each(function(){
    $(this).click(function(){
      var n = 5;
      var i = $("#list");
      $("#list").html("");
        for (j = 0; j < 6; j++){
        var x = Math.floor(Math.random()*(n+1));
        i.append("<li>" + m[x] + "</li>");
      }
    })
  })
  $("#btn2").each(function(){
    $(this).click(function(){
      var mylist = $('#list');
      var listitems = mylist.children('li').get();
      listitems.sort(function(a, b) {
         var compA = $(a).text();
         var compB = $(b).text();
         return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
      })
      $.each(listitems, function(idx, itm){
        mylist.append(itm); 
      });
    })
  })
  $("#btn3").each(function(){
    $(this).click(function(){
      var mylist = $('#list');
      var listitems = mylist.children('li').get();
      listitems.sort(function(a, b) {
         var compA = $(a).text();
         var compB = $(b).text();
         return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
      })
      $.each(listitems, function(idx, itm){
        mylist.append(itm); 
      });
    })
  })
  $("#btn4").each(function(){
    $(this).click(function(){
      $("#list").html("");
    })
  })
  var i = $("#list");
  for (j = 0; j < 6; j++){
    i.append("<li>" + m[j] + "</li>");
  }
});