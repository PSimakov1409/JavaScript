var m = new Array()
m.test = 6
m[1] = "Виктор Крылов"
m[2] = "Евгений Хашин"
m[3] = "Лидия Хашина"
m[4] = "Сергей Авдеев"
m[5] = "Антон Сысоев"
m[6] = "Павел Симаков"
$(document).ready(function(){
	var mylist = $("#list");
	for (mylist = 0; mylist < 6; mylist++){
		mylist.append("<li>" + m[mylist] + "</li>")
	}
})