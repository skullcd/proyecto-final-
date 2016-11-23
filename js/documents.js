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
			
			innerDocuments = innerDocuments + 	"<li>" +
													"<div class='file' onclick=selectDocument('"+_documentTemp[1]+"')>" +
														"<div id='namef'>"+_title+"</div>" +
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
		
		if (_docTemp[1] == titleOfDocument) {
			_document = userDocuments[i];
		}
	}
	
	localStorage.setItem('documentFinded', _document);
	localStorage.setItem('isDocToModified', 'true');
	
	window.location.href = "editor.html";
}