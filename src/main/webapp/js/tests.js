$(document).ready(function(){
	
	$.ajax({
		type: "GET",
		dataType: "html",
		url:"./ServletsTest",
		data: $.param({
			usuario: "miguel",
			tecnologia: "java"
		}),
		success: function(data){
			let parsedData = JSON.parse(data);
			console.log("peticion correcta")
		}
	})
})