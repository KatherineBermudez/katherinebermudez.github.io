$( document ).ready(function() {

	$('#portfolio').ready(function(){

		$.ajax({
			  type: "GET",
			  url: 'js/proyectos.json',
			  dataType: "json",
			  success:function(data){
			  	//mi funcion
			  	mostrarProyectos(data.proyectos);
			  	console.log(data);
						
			  },
			  error:function(jqXHR, textStatus, errorThrown) {
				console.log("Text Status:" +textStatus+"\nError:"+errorThrown);
			  }
		});	
	});

	function mostrarProyectos(proyecto) {
		// body...
		var content = "";
		for (var i = 0; i < proyecto.length; i++) {
			content +=

			'<li>' +
			'<a href="#">' +
			    '<img src="' + proyecto[i].img + '">' +
			'</a>' +
			'<h2 class="subtitle">' + proyecto[i].categ + '</h3>' +
			'<p>' + proyecto[i].detalle + '</p>' +
			'<a href="#" class="read-more">' + "Read more" + '<a>' +
			'</li>';

		};

		$('#img-project').append(content);

	}
}); 

window.onload = function() { 
  
  animateprogress("#html5",70);
  animateprogress("#css3",60);
  animateprogress("#js",50);
  animateprogress("#ilustrador",70);
  
}   
	
function animateprogress (id, val){		


	var getRequestAnimationFrame = function () {  
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||   
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ){
			window.setTimeout(enroute, 2 / 900 * 1000);
		};	
	};
	
	var fpAnimationFrame = getRequestAnimationFrame();   
	var i = 0;
	var animacion = function () {
			
	if (i<=val) 
		{
			// document.querySelector(id).setAttribute("value",i);
			document.querySelector(id+"+ span").innerHTML = i+"%";
			i++;
			fpAnimationFrame(animacion);          
		}								
	}
		fpAnimationFrame(animacion);   	
}