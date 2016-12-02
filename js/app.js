/**
*
*
*/
function validate (id) 
{
	var auth = document.getElementById(id);
	var day  = document.getElementById("day");
	var name  = document.getElementById("name");
	var month = document.getElementById("month");
	var email = document.getElementById("email").value;

	if (auth.value == "" || name.required == "invalid"){
		auth.classList.add('mal');
	}
	else {
		auth.classList.remove('mal');
	}
	if (month.value == "2") { 

		day.max = "28";
	}
	else {
		day.max = "31";
	}

	if (month.value == "4" || month.value == "6" || month.value == "6" || month.value == "11") { 

		if (day.value >= "31") {
			day.max = "30";
		}
		else {
			day.max = "31";
		}

	}


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
	var username = document.getElementById('user');
	var password = document.getElementById('password');
	var contenedor = document.getElementById("barran");
	
	var users = localStorage.getItem('users');
	var _users = new Array();
	var user = new Array();
	var _user = new Array();
	
	_users = users.split('#');
	
	for (i = 0; i < _users.length; i++) {
		_user = _users[i].split('::');
		
		if (_user[1] == username.value &&  _user[3] == password.value) {
			user = _user;
		}
	}
	
	localStorage.setItem('name', user[0]);
	localStorage.setItem('user', user[1]);
	localStorage.setItem('email', user[2]);

	var p = "El usuaio o la contraseña es incorrecta";

	if (username.value == user[1] && password.value == user[3]) {
		localStorage.setItem('authenticate', true);
		window.location = "index.html";
	} else {
		
		var mostrar = document.getElementById("barran");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="20px";
			contenedor.innerHTML = "<h3>"+p+"</h3>";

			setTimeout(function(){
				mostrar.style.top = "-100%";},3500
			);
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
	
		c_nombre.innerHTML = "<h5>"+c+"</h5>";
		sub_nombre.innerHTML = "<h4>"+s+'<br>'+n+"</h4>";

		}
	else { 
		var error = document.getElementById("barran");
		var a = "Necesitas estar autenticado para poder usar el editor";

		if(error.style.top = "-100%"){

			 	error.style.top ="80px";
				error.innerHTML = "<h4>"+a+"</h4>";

				 setTimeout(function(){
					error.style.top = "-100%";},3500);	 	

				  setTimeout(function(){
					window.location = "login.html";},4000);	 	


		 	}
		 	
	
		}
}

/**
*
*
*/
function isntAuthenticated () 
{
	if (localStorage.getItem('authenticate') == 'true') {

		var error = document.getElementById("barran");
		var a = "Necesitas cerrar sesion para poder salir.";

		if(error.style.top = "-100%"){

			 	error.style.top ="20px";
				error.innerHTML = "<h5>"+a+"</h5>";

				 setTimeout(function(){
					error.style.top = "-100%";},3500);	 	

				  setTimeout(function(){
					window.location = "index.html";},4000);	 	


		 	}
		 	
	
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

	if ( (password_confirm != password))
	{
		var p = "Las contraseñas no coinciden";
		var mostrar = document.getElementById("barran");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="20px";
			mostrar.innerHTML = "<h6>"+p+"</h6>";

			setTimeout(function(){
				mostrar.style.top = "-100%";},3500
			);
		}	
	}


	if ((name == "") || (user == "") || (email == "") 
	|| (day == "") || (month == "") || (year == "") || (password_confirm == "") )
	{
		var p = "Los datos ingresados no estan completos";
		var mostrar = document.getElementById("barran");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="20px";
			mostrar.innerHTML = "<h1>"+p+"</h1>";

			setTimeout(function(){
				mostrar.style.top = "-100%";},3500
			);
		}	
	}
	else 
	{
		if (! localStorage.getItem('users')) {
			localStorage.setItem('users', '');
		}
		
		var users = localStorage.getItem('users');
		
		var user = name + '::' + user + '::' + email + '::' + password + '::' + day + '::' + month + '::' + year + '#';
		
		var _users = users + user;
		
		localStorage.setItem('users', _users);

		localStorage.setItem('authenticate', false);

		if (contenedor.style.top= "-100%" && (password_confirm == password)) {
			contenedor.style.top ="20px";
			contenedor.style.background ="color: #3B5998";
			contenedor.innerHTML = "<h3>Datos registrados correctamente</h3>";

			setTimeout(function(){
				contenedor.style.top = "-100%";
				window.location = "login.html";},3500
			);
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

function showInfo () {
	var r = document.getElementById("informacion");

	if (r.style.opacity != "1") {
		r.style.opacity = "1";
	} else {
		r.style.opacity = "0";
	}

}

function nuevo(){
	window.location ="editor.html";
}

function herramientas(){
	var bl = document.getElementById("bh");
	var b = document.getElementById("b_acomodar");
	var p = document.getElementById("p_acomodar");
	var f = document.getElementById("f_acomodar");
	var u = document.getElementById("u_acomodar");
	var s = document.getElementById("san");
	var c = document.getElementById("c_acomodar");
	
	if (bl.style.visibility != "visible") {
		bl.style.visibility = "visible";
		setTimeout(function(){
			b.style.opacity = "1";},120);
		setTimeout(function(){
			p.style.opacity = "1";},100);
		setTimeout(function(){
			f.style.opacity = "1";},80);
		setTimeout(function(){
			u.style.opacity = "1";},60);
		setTimeout(function(){
			s.style.opacity = "1";},40);
		setTimeout(function(){
			c.style.opacity = "1";},20);
	} else {
		setTimeout(function(){
			b.style.opacity = "0";},20);
		setTimeout(function(){
			p.style.opacity = "0";},40);
		setTimeout(function(){
			f.style.opacity = "0";},60);
		setTimeout(function(){
			u.style.opacity = "0";},80);
		setTimeout(function(){
			s.style.opacity = "0";},100);
		setTimeout(function(){
			c.style.opacity = "0";},120);

		bl.style.visibility = "hidden";
	}

	
}
