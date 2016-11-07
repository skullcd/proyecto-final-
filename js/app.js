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

	if (user.value == localStorage.getItem('user') && password.value == localStorage.getItem('password')) {
		localStorage.setItem('authenticate', true);
		window.location = "editor.html";
	}
	else {
		alert('Usuario y contraseña incorrectos');
	}
}


/**
*
*
*/
function isAuthenticated ()
{
	if (localStorage.getItem('authenticate') == 'true') { alert('Bienvenido ' + localStorage.getItem('name')); }
	else { alert('Necesitas estar autenticado, para poder usar el editor'); window.location = "login.html";}
}


/**
*
*
*/
function isntAuthenticated () 
{
	if (localStorage.getItem('authenticate') == 'true') {
		alert('Necesitas cerrar sesion para entrar a esta seccion.');
		window.location = "editor.html";
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

	if (password_confirm != password) {
		alert('Las contraseñas no coinciden');
		//window.location = "registro.html";
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

		alert('Datos registrados exitosamente.');
		window.location = "login.html";
	}


}