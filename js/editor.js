
var _bold = "no";
var _italic = "no";
var _underlined = "no";
var _fontsize = "11";
var _color = "#000000";
var _bleeding = "0";

function bold () 
{
	var area = document.getElementById('areadetexto');
	
	if (! area.classList.contains('boldClass')) {
		area.classList.add('boldClass');
		_bold = "yes";
	} else {
		area.classList.remove('boldClass');
		_bold = "no";
	}
}

function italic () 
{
	var area = document.getElementById('areadetexto');
	
	if (! area.classList.contains('italicClass')) {
		area.classList.add('italicClass');
		_italic = "yes";
	} else {
		area.classList.remove('italicClass');
		_italic = "no";
	}
}

function underlined () {
	var area = document.getElementById('areadetexto');
	
	if (! area.classList.contains('underlinedClass')) {
		area.classList.add('underlinedClass');
		_underlined = "yes";
	} else {
		area.classList.remove('underlinedClass');
		_underlined = "no";
	}
}

function fontSize () {
	var area = document.getElementById('areadetexto');
	var fontsize = document.getElementById('fontSize');
	
	_fontsize = '"' + fontsize.options[fontsize.selectedIndex].value + '"';
	area.style.fontSize = fontsize.options[fontsize.selectedIndex].value + 'px';
}

function color (color) {
	var area = document.getElementById('areadetexto');
	
	_color = color;
	area.style.color = color;
}

function bleeding () {
	var area = document.getElementById('areadetexto');
	var bleeding = document.getElementById('bleeding');
	

	area.style.paddingLeft = bleeding.options[bleeding.selectedIndex].value + '%';


	if(bleeding.options[bleeding.selectedIndex].value == "0"){
		area.style.width = "82%";
	}

	if(bleeding.options[bleeding.selectedIndex].value == "10"){
		area.style.width = "72%";
	}

	if(bleeding.options[bleeding.selectedIndex].value == "15"){
		area.style.width = "67%";
	}

	if(bleeding.options[bleeding.selectedIndex].value == "20"){
		area.style.width = "62%";
	}
	if(bleeding.options[bleeding.selectedIndex].value == "25"){
		area.style.width = "57%";
	}

}

function save () {
	
	var _title = document.getElementById('title').value;
	var _body = document.getElementById('areadetexto').value;
	var _documents = localStorage.getItem('documents');
	
	_title = _title.replace(/\s+/g, '_');
	
	var data = localStorage.getItem('email') + '::' + _title + '::' + _body + '::' + _bold + '::' + _italic + '::' + _underlined + '::' + _fontsize + '::' + _color + '::' + _bleeding + '$';
	
	if (! localStorage.getItem('documents')) {
		localStorage.setItem('documents', '');
	}
	
	documents = localStorage.getItem('documents');
	
	usersDocuments = new Array();
	userDocuments = new Array();
	foreignDocuments = new Array();
	
	usersDocuments = documents.split('$');
	foreignDocuments = usersDocuments;
	
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email')) {
			userDocuments.push(usersDocuments[i]);
			delete foreignDocuments[i];
		}
	}
	
	result =  existAndModified(userDocuments, _title, data);
	
	if (! result) {
		__documents = _documents + data;

		var mostrar = document.getElementById("barran_r");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="70px";
			mostrar.innerHTML = "<h3>"+'Documento Creado Correctamente'+"</h3>";

			setTimeout(function(){
				mostrar.style.top = "-100%";},3000);

			 setTimeout(function(){
					window.location = "index.html";},3500);	 
		}	


		localStorage.setItem('documents', __documents);
		localStorage.setItem('isDocToModified','false');
	} else {

		var mostrar = document.getElementById("barran_r");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="70px";
			mostrar.innerHTML = "<h4>"+'Documento Modificado Correctamente'+"</h4>";

			setTimeout(function(){
				mostrar.style.top = "-100%";},3000);

			 setTimeout(function(){
					window.location = "index.html";},3500);	 
		}	

		localStorage.setItem('documents', documentCollector(foreignDocuments, result));
		localStorage.setItem('isDocToModified','false');
	}
}

function existAndModified (userDocuments, _title, data) {
	for (i = 0; i < userDocuments.length; i++) {
		_documentTemp = userDocuments[i].split('::');
		
		if (_documentTemp[1] == _title) {
			userDocuments[i] = data;
			return userDocuments;
		}
	}
	return false;
}

function documentCollector (foreignDocuments, userDocuments) {
	var _documentsTemps = "";
	
	for (i = 0; i < foreignDocuments.length; i++) {
		if (foreignDocuments[i]) {
			_documentsTemps = _documentsTemps + foreignDocuments[i] + '$';
		}
	}
	
	for (i = 0; i < userDocuments.length; i++) {
		if (userDocuments[i]) {
			_documentsTemps = _documentsTemps + userDocuments[i] + '$';
		}
	}
	
	return _documentsTemps;
}

function setDocumentToEditor () {
	if (localStorage.getItem('isDocToModified') == 'true') {
		_document = localStorage.getItem('documentFinded');
		chargeData(_document);
	}
}

function chargeData (_documentFinded) {
	_document = _documentFinded.split('::');
	document.getElementById('title').innerHTML = _document[1].replace('_',' ');
	var area = document.getElementById('areadetexto');
	
	area.innerHTML = _document[2];
	
	if (_document[3] === 'yes') {
		area.classList.add('boldClass');
	}
	
	if (_document[4] === 'yes') {
		area.classList.add('italicClass');
	}
	
	if (_document[5] === 'yes') {
		area.classList.add('underlinedClass');
	}
	
	area.style.fontSize = String(_document[6]).concat("px") ;
	
	area.style.color = _document[7];
} 

