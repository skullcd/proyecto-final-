/**
*
*
*/
function validate (id) 
{
	var auth = document.getElementById(id);

	if (auth.value == "")
		auth.classList.add('mal');
	else
		auth.classList.remove('mal');
}


/**
*
*
*/
function password_confirm () 
{
	var password = document.getElementById('password');
	var password_confirm = document.getElementById('password_confirm');

	if (password.value == password_confirm.value) {
		password.classList.remove('mal');
		password_confirm.classList.remove('mal');
	} else {
		password.classList.add('mal');
		password_confirm.classList.add('mal');
	}
}


/**
*
*
*/
function login ()
{
	var user = document.getElementById('user');
	var password = document.getElementById('password');
	var contenedor = document.getElementById("barran");

	var p = "El usuaio o la contraseña es incorrecta";

	if (user.value == localStorage.getItem('user') && password.value == localStorage.getItem('password')) {
		localStorage.setItem('authenticate', true);
		window.location = "index.html";
	}
	else {
		var mostrar = document.getElementById("barran");
		 	if(mostrar.style.top= "-100%"){
			 	mostrar.style.top ="20px";
				contenedor.innerHTML = "<h3>"+p+"</h3>";

				 setTimeout(function(){
					mostrar.style.top = "-100%";},3500);
				 	

		 	}
		 	
			
	}
}


/**
*

*/
function isAuthenticated ()
{
	if (localStorage.getItem('authenticate') == 'true') {
		var contenedor = document.getElementById("mensajes");
		var c_nombre = document.getElementById("b_nombre");
		var sub_nombre = document.getElementById("sub_nombre");

		var c = (localStorage.getItem('user'));;
		var n = (localStorage.getItem('email'));;
		var s = (localStorage.getItem('name'));;
	    var p = ("Bienvenido "+'<br>'+ localStorage.getItem('user'));;
	    var x = document.getElementById("mensajes");
	    var y = document.getElementById("fondo2");


		    if(x.style.visibility = "hidden"){
				 setTimeout(function(){
					x.style.visibility ="visible";
				 	x.style.opacity ="1";
					contenedor.innerHTML = "<h1>"+p+"</h1>";},100);
				 	c_nombre.innerHTML = "<h5>"+c+"</h5>";
				 	sub_nombre.innerHTML = "<h4>"+s+'<br>'+n+"</h4>";

			 }


		}
	else { 
		alert('Necesitas estar autenticado, para poder usar el editor'); 
		window.location = "login.html";
		}
}

function quitar(){
	var quit = document.getElementById("mensajes");
	var quit2 = document.getElementById("fondo2");

	if(quit.style.visibility = "visible"){
		quit.style.visibility= "hidden"
	}

	if(quit2.style.visibility = "visible"){
		 setTimeout(function(){
		quit2.style.visibility= "hidden"
		quit2.style.opacity="0";
		quit2.style.opacity = "0";},860);
	}
}
/**
*
*
*/
function isntAuthenticated () 
{
	if (localStorage.getItem('authenticate') == 'true') {
		alert('Necesitas cerrar sesion para entrar a esta seccion.');
		window.location = "index.html";
	}
}

function out(){
	if (localStorage.getItem('authenticate') == 'true'){
		window.location = "login.html";
		localStorage.setItem('authenticate', false);

	}
}

/**
*
*
*/
function register () 
{
	var name = document.getElementById('name').value;
	var user = document.getElementById('user').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var password_confirm = document.getElementById('password_confirm').value;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document. getElementById('year').value;

	var contenedor = document.getElementById("barran_r");
	var p = "Datos registrados correctamente";

	if (password_confirm != password) {
		alert('Las contraseñas no coinciden');
		window.location = "registro.html";
	}
	else 
	{
		localStorage.setItem('name', name);
		localStorage.setItem('user', user);
		localStorage.setItem('email', email);
		localStorage.setItem('password', password);
		localStorage.setItem('day', day);
		localStorage.setItem('month', month);
		localStorage.setItem('year', year);
		localStorage.setItem('authenticate', false);

		if(contenedor.style.top= "-100%"){
			 	contenedor.style.top ="20px";
			 	contenedor.style.background ="color: #3B5998";
				contenedor.innerHTML = "<h3>"+p+"</h3>";

				 setTimeout(function(){
					contenedor.style.top = "-100%";
					window.location = "login.html";},3500);
				}
		
	}


}
function desprincipal(){
	var titulo = document.getElementById("titulo");
	titulo.style.left = "-19%";
	setTimeout(function(){
		var rayas = document.getElementById("menudesp");
			rayas.style.visibility ="visible";
			rayas.style.opacity = "1";
	},200);
}

function mostra(){
	var r = document.getElementById("informacion");

	if(r.style.visibility == "hidden"){
		r.style.visibility = "visible";
	}
	else{
		r.style.visibility = "hidden";
	}

}

function nuevo(){
	window.location ="editor.html";
}

function herramientas(){
	var bl = document.getElementById("bh");
	var b = document.getElementById("editor");
	var i = document.getElementsByClassName("b_herramientas");

	if(bl.style.visibility == "hidden"){
		bl.style.visibility = "visible";
	}
	else{
		bl.style.visibility = "hidden";
	}
}


function colorB(){
	var eb = document.getElementById("bn");

     alert("negro");
     eb.style.background = "color:red";

}
function colorR(){
	var p = document.getElementById("palette");
	 alert("rojo");
}

function colorA(){
	var p = document.getElementById("palette");
	 alert("amarillo");
		
}

function colorN(){
	var p = document.getElementById("palette");

		 alert("naranja");

}
function colorAZ(){
	var p = document.getElementById("palette");

     alert("azul");

}
function colorV(){
	var p = document.getElementById("palette");
	 alert("verde");
}

function colorT(){
	var p = document.getElementById("palette");
	 alert("turquesa");
		
}

function colorG(){
	var p = document.getElementById("palette");

		 alert("gris");

}

