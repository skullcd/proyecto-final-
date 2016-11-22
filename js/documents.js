function innerDocuments () {
	if (! localStorage.getItem('documents')) {
		localStorage.setItem('documents', '');
	}
	
	documents = localStorage.getItem('documents');
	userDocuments = new Array();
	innerDocuments = "<div></div>";
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

function selectDocument (email, titleOfDocument) {
	setDocumentToEditor(email, titleOfDocument);
}