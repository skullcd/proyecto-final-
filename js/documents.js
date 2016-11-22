function innerDocuments () {
	if (! localStorage.getItem('documents')) {
		localStorage.setItem('documents', '');
	}
	
	var documents = localStorage.getItem('documents');
	var userDocuments = new Array();
	var innerDocuments = "";
	usersDocuments = documents.split('$');
	
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email')) {
			userDocuments.push(usersDocuments[i] + '$');
			innerDocuments = innerDocuments + "<li><div class='file'><div id='namef'>"+_documentTemp[1]+"</div></div></li>"
		}
	}
	
	document.getElementById('inDocuments').innerHTML = innerDocuments;
}