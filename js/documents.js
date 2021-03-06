function existDocuments () {
	docuents = localStorage.getItem('documents');
	usersDocuments = documents.split('$');
	
	userDocuments = new Array();
	
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email')) {
			userDocuments.push(usersDocuments[i] + '$');
		}
	}
	
	if (userDocuments.length == 0) {
		document.getElementById('docs').innerHTML = "<h1>NO TIENES DOCUMENTOS</h1>";
	}
}

function resetDocuments () {
	localStorage.setItem('temporalStyles', '');
	
	localStorage.setItem('documentFinded', '');
	
	localStorage.setItem('isDocToModified', 'false');
	
	localStorage.setItem('stylesInit', 'no::no::no::11::#000000::0');
	
	localStorage.setItem('identifier', '.trabajo++');
}

function innerDocuments () {
	if (! localStorage.getItem('documents')) {
		localStorage.setItem('documents', '');
	}
	
	documents = localStorage.getItem('documents');
	userDocuments = new Array();
	innerDocuments = "";
	usersDocuments = documents.split('$');
	
		
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email')) {
			userDocuments.push(usersDocuments[i] + '$');
			
			_title = _documentTemp[1].replace('_', ' ');
			
			if (_title.length > 16 ) {
				__title = "";
				
				for (i = 0; i < 12; i++) {
					__title = __title + _title.charAt(i);
				}
				
				_title = __title + '...';
			}
			
			innerDocuments = innerDocuments + 	"<li>" +
													"<div class='file' onclick=selectDocument('"+_documentTemp[9]+"')>" +
														"<div id='namef'>"+ 
															_title +
														"</div>" +
													"</div>" +
													"<div class='e'>" +
														"<button onclick=deleteDocument('"+_documentTemp[9]+"')>Eliminar</button>" +
													"</div>" +
												"</li>"
		}
	}
	
	document.getElementById('inDocuments').innerHTML = innerDocuments;
}

function selectDocument (titleOfDocument) {
	_email = localStorage.getItem('email');
	_documents = localStorage.getItem('documents');
	userDocuments = new Array();
	
	usersDocuments = _documents.split('$');
	
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email')) {
			userDocuments.push(usersDocuments[i]);
		}
	}
	
	_document = "";
	for (i = 0; i < userDocuments.length; i++) {
		_docTemp = userDocuments[i].split('::');
		
		if (_docTemp[9] == titleOfDocument) {
			_document = userDocuments[i];
		}
	}
	
	docStyle = _document.split('::');
	
	style = docStyle[3] + '::' + docStyle[4] + '::' + docStyle[5] + '::' + docStyle[6] + '::' + docStyle[7] + '::' + docStyle[8];
	
	localStorage.setItem('stylesInit', style);
	
	localStorage.setItem('documentFinded', _document);
	
	localStorage.setItem('isDocToModified', 'true');
	
	window.location.href = "editor.html";
}


function deleteDocument (userDoc) {
	usersDocuments = localStorage.getItem('documents').split('$');
	
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email') && _documentTemp[9] == userDoc) {
			delete usersDocuments[i];
		}
	}
	
	restDocuments = "";
	
	for (i = 0; i < usersDocuments.length; i++) {
		if (usersDocuments[i]) {
			restDocuments = restDocuments + usersDocuments[i] + '$';
		}
	}
	
	localStorage.setItem('documents', restDocuments);
	
	window.location.href = "index.html";
}
