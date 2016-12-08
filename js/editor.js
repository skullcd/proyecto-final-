
var _bold = "";
var _italic = "";
var _underlined = "";
var _fontsize = "";
var _color = "";
var _bleeding = "";

function styleInit ()
{
	style = localStorage.getItem('stylesInit').split('::');
	
	_bold = style[0];
	_italic = style[1];
	_underlined = style[2];
	_fontsize = style[3];
	_color = style[4];
	_bleeding = style[5];
}

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
	
	_fontsize = fontsize.options[fontsize.selectedIndex].value;
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


	if (bleeding.options[bleeding.selectedIndex].value == "0") {
		area.style.width = "81%";
		area.style.paddingLeft = "1%";
	}

	if (bleeding.options[bleeding.selectedIndex].value == "10") {
		area.style.width = "72%";
	}

	if (bleeding.options[bleeding.selectedIndex].value == "15") {
		area.style.width = "67%";
	}

	if (bleeding.options[bleeding.selectedIndex].value == "20") {
		area.style.width = "62%";
	}
	
	if (bleeding.options[bleeding.selectedIndex].value == "25") {
		area.style.width = "57%";
	}

	_bleeding = bleeding.options[bleeding.selectedIndex].value;
}

function save () {
	
	var _title = document.getElementById('title').value;
	var _body = document.getElementById('areadetexto').value;
	var _documents = localStorage.getItem('documents');
	
	if (_title == "") {
		var mostrar = document.getElementById("barran");
		if(mostrar.style.top= "-100%"){
			mostrar.style.top ="70px";
			mostrar.innerHTML = "<h2>"+'Ingresa titulo para guardar'+"</h2>";
			setTimeout(function(){mostrar.style.top = "-100%";},3000);
		}	
		
		return false;
	}
	
	_title = _title.replace(/\s+/g, '_');
	
	identifier = _title + '.trabajo++';
	
	data = localStorage.getItem('email') + '::' + _title + '::' + _body + '::' + _bold + '::' + _italic + '::' + _underlined + '::' + _fontsize + '::' + _color + '::' + _bleeding + '::' + identifier + '$';
	
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
	
	result = existAndModified(userDocuments, localStorage.getItem('identifier'), data);
	
	if (! result) {
		__documents = _documents + data;
		
		localStorage.setItem('identifier', identifier);

		var mostrar = document.getElementById("barran_r");
		if (mostrar.style.top= "-100%") {
			mostrar.style.top ="70px";
			mostrar.innerHTML = "<h3>"+'Documento Creado Correctamente'+"</h3>";
			setTimeout(function(){mostrar.style.top = "-100%";},3000);
		}	

		localStorage.setItem('documents', __documents);
		localStorage.setItem('isDocToModified','false');
		
	} else {

		var mostrar = document.getElementById("barran_r");
		if (mostrar.style.top= "-100%") {
			mostrar.style.top ="70px";
			mostrar.innerHTML = "<h4>"+'Documento Modificado Correctamente'+"</h4>";

			setTimeout(function(){ mostrar.style.top = "-100%"; },3000);
		}	

		localStorage.setItem('documents', documentCollector(foreignDocuments, result));
		localStorage.setItem('isDocToModified','false');
	}
}

function existAndModified (userDocuments, _title, data) {
	for (i = 0; i < userDocuments.length; i++) {
		_documentTemp = userDocuments[i].split('::');
		
		if (_documentTemp[9] == _title) {
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


function herramientas ()
{
	var bl = document.getElementById("bh");
	var b = document.getElementById("b_acomodar");
	var p = document.getElementById("p_acomodar");
	var f = document.getElementById("f_acomodar");
	var u = document.getElementById("u_acomodar");
	var s = document.getElementById("san");
	var c = document.getElementById("c_acomodar");
	
	if (bl.style.visibility != "visible") {
		bl.style.visibility = "visible";
		bl.style.marginTop = "0px";
		bl.style.height = "490px";
		setTimeout( function () { b.style.opacity = "1"; },120);
		setTimeout( function () { p.style.opacity = "1"; },100);
		setTimeout( function () { f.style.opacity = "1"; },80);
		setTimeout( function () { u.style.opacity = "1"; },60);
		setTimeout( function () { s.style.opacity = "1"; },40);
		setTimeout( function () { c.style.opacity = "1"; },20);
	} else {
		setTimeout( function () { b.style.opacity = "0"; },20);
		setTimeout( function () { p.style.opacity = "0"; },40);
		setTimeout( function () { f.style.opacity = "0"; },60);
		setTimeout( function () { u.style.opacity = "0"; },80);
		setTimeout( function () { s.style.opacity = "0"; },100);
		setTimeout( function () { c.style.opacity = "0"; },120);
		bl.style.height = "0px";
		bl.style.marginTop = "490px";
		bl.style.visibility = "hidden";
	}
}

function chargeData (_documentFinded) {
	_document = _documentFinded.split('::');
	
	document.getElementById('title').innerHTML = _document[1].replace('_',' ');
	
	var area = document.getElementById('areadetexto');
	
	localStorage.setItem('identifier', _document[9]);
	
	area.innerHTML = _document[2];
}

function chargeStyle () {
	style = localStorage.getItem('stylesInit').split('::');
	
	area = document.getElementById('areadetexto');
	document.getElementById('fontSize').value = style[3];
	document.getElementById('bleeding').value = style[5];
	
	if (style[0] == 'yes') { area.classList.add('boldClass');}
	
	if (style[1] == 'yes') {area.classList.add('italicClass');}
	
	if (style[2] == 'yes') {area.classList.add('underlinedClass');}
	
	area.style.fontSize = (style[3] + "px");
	
	area.style.color = style[4];

	area.style.paddingLeft = style[5] + '%';
	
	if (style[5] == "0") {
		area.style.width = "81%";
		area.style.paddingLeft = "1%";
	}

	if (style[5] == "10") {area.style.width = "72%";}

	if (style[5] == "15") {area.style.width = "67%";}

	if (style[5] == "20") {area.style.width = "62%";}
	
	if (style[5] == "25") {area.style.width = "57%";}
	
} 

