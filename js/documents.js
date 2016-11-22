function innerDocuments () {
	if (! localStorage.getItem('documents')) {
		localStorage.setItem('documents', '');
	}
	
	var documents = localStorage.getItem('documents');
	var userDocuments = new Array();
	
	usersDocuments = documents.split('$');
	
	for (i = 0; i < usersDocuments.length; i++) {
		_documentTemp = usersDocuments[i].split('::');
		
		if (_documentTemp[0] == localStorage.getItem('email')) {
			userDocuments.push(usersDocuments[i]);
		}
	}
	
	alert(userDocuments);
}