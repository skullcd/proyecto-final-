
function isEmail (string) 
{
	for (i = 0; i < string.length; i++) {
		if (string.charAt(i) == "@") { return false; }
	}
	
	return true;
}

/**
*
*
*/
function validate (id) 
{
	var auth = document.getElementById(id);

	if (auth.value == "") { auth.classList.add('mal'); }
	else { auth.classList.remove('mal'); }
}

function validateEach () 
{
	var name = document.getElementById('name').value;
	var user = document.getElementById('user').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var password_confirm = document.getElementById('password_confirm').value;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document. getElementById('year').value;
	
	if (name == "") { return "Ingresa el nombre"; }
	
	if (user == "") { return "Ingresa un nombre de usuario"; }
	
	if (email == "") { return "Ingresa un Email"; }
	
	if (isEmail(email)) { return "Lo ingresado no es un email"; }
	
	if (password == "") { return "Ingresa Password"; }
	
	if (password_confirm == "") { return "Ingresa Password confirm"; }
	
	if (day == "") { return "Ingresa día"; }
	
	if (month == "") { return "Ingresa mes"; }
	
	if (year == "") { return "Ingresa año"; }
	
	if (password != password_confirm) {return "Contraseñas no coinciden" }
	
	return false;
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
	username = document.getElementById('user');
	password = document.getElementById('password');
	contenedor = document.getElementById("barran");
	
	users = localStorage.getItem('users');
	_users = new Array();
	user = new Array();
	_user = new Array();
	
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

	p = "El usuaio o la contraseña es incorrecta";

	if (username.value == user[1] && password.value == user[3]) {
		localStorage.setItem('authenticate', true);
		window.location = "index.html";
	} else {
		
		mostrar = document.getElementById("barran");
		
		if (mostrar.style.top= "-100%") {
			mostrar.style.top ="20px";
			contenedor.innerHTML = "<h3>"+p+"</h3>";

			setTimeout(function(){ mostrar.style.top = "-100%"; },3500);
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

	} else { 
		var error = document.getElementById("barran");
		var a = "Necesitas estar autenticado para poder usar el editor";

		if (error.style.top = "-100%") {
			error.style.top ="80px";
			error.innerHTML = "<h4>"+a+"</h4>";

			setTimeout(function(){error.style.top = "-100%";},3500);	 	
			setTimeout(function(){window.location = "login.html";},4000);	 	
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

		if (error.style.top = "-100%") {
			error.style.top ="20px";
			error.innerHTML = "<h5>"+a+"</h5>";

			setTimeout(function(){ error.style.top = "-100%"; },3500);	 	
			setTimeout(function(){ window.location = "index.html"; },4000);
		 }
	}
}

function out ()
{
	if (localStorage.getItem('authenticate') == 'true') {
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

	
	validate = validateEach();
	
	if (validate) {
		var mostrar = document.getElementById("barran");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="20px";
			mostrar.innerHTML = "<h6>"+validate+"</h6>";

			setTimeout(function(){ mostrar.style.top = "-100%"; },3500);
			
			return false;
		}	
	}
	

	if (! localStorage.getItem('users')) {
		localStorage.setItem('users', '');
	}
		
	users = localStorage.getItem('users');
		
	user = name + '::' + user + '::' + email + '::' + password + '::' + day + '::' + month + '::' + year + '#';
		
	_users = users + user;
		
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

function desprincipal () 
{
	titulo = document.getElementById("titulo");
	titulo.style.left = "-19%";
	
	setTimeout( function() {
		rayas = document.getElementById("menudesp");
		rayas.style.visibility ="visible";
		rayas.style.opacity = "1";
	},200);
}

function showInfo ()
{
	var r = document.getElementById("informacion");

	if (r.style.opacity != "1") { r.style.opacity = "1"; } 
	else { r.style.opacity = "0"; }
}

function nuevo ()
{
	window.location ="editor.html";
}


