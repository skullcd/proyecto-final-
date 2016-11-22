
var _bold = "no";
var _italic = "no";
var _underlined = "no";
var _fontsize = "11";
var _color = "#000000";
var _bleeding = "0";

var area = document.getElementById('areadetexto');

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
		_underline = "si";
	} else {
		area.classList.remove('underlinedClass');
		_underline = "no";
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
	
	_bleeding = '"' + bleeding.options[bleeding.selectedIndex].value + '"';
	area.style.paddingLeft = bleeding.options[bleeding.selectedIndex].value + '%';
}

function save () {
	var data = ':' + _bold + ':' + _italic + ':' + _underlined + ':' + _fontsize + ':' + _color + ':' + _bleeding + '@';

	localStorage.setItem('data', data);
}
