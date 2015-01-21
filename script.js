var m = new Array( "Виктор Крылов", "Евгений Хашин", "Лидия Хашина","Сергей Авдеев","Антон Сысоев","Павел Симаков")
$(document).ready(function(){
	$('button').each(function(){
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
	var i = $("#list");
	for (j = 0; j < 6; j++){
		i.append("<li>" + m[j] + "</li>");
	}
	
});