

function bold () 
{
	var area = document.getElementById('areadetexto');

	if (! area.classList.contains('boldClass')) {
		area.classList.add('boldClass');
	} else {
		area.classList.remove('boldClass');
	}
}

function italic () 
{
	var area = document.getElementById('areadetexto');

	if (! area.classList.contains('italicClass')) {
		area.classList.add('italicClass');
	} else {
		area.classList.remove('italicClass');
	}
}

function underlined () {
	var area = document.getElementById('areadetexto');

	if (! area.classList.contains('underlinedClass')) {
		area.classList.add('underlinedClass');
	} else {
		area.classList.remove('underlinedClass');
	}
}

function fontSize () {
	var fontsize = document.getElementById('fontSize');

	var area = document.getElementById('areadetexto');
	area.style.fontSize = fontsize.options[fontsize.selectedIndex].value + 'px';
}

function color(color) {
	var area = document.getElementById('areadetexto');

	area.style.color = color;
}

function bleeding () {
	var area = document.getElementById('areadetexto');
	var bleeding = document.getElementById('bleeding');
	  
	area.style.paddingLeft = bleeding.options[bleeding.selectedIndex].value + '%';
}
