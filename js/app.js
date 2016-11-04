function autentificar(){
  	var usuario = document.getElementById("usuario");
	var password = document.getElementById("password");
	if(usuario.value == ""){
		usuario.classList.add("mal");
	}
	else{
		usuario.classList.remove("mal");
	}
	if(password.value == ""){
		password.classList.add("mal");
	}
	else{
		password.classList.remove("mal");
	}

  	if (usuario.value == localStorage.getItem('user') && password.value == localStorage.getItem('password')){
  		 window.location = "editor.html";
  	}
}


 function cargar(){
 	var user = document.getElementById("nusuario");
 	var pasw = document.getElementById("pass");

 	localStorage.setItem('user', user.value);
 	localStorage.setItem('password',pasw.value);

 	if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
	} 
	else {
    localStorage.clickcount = 1;
	}
 }