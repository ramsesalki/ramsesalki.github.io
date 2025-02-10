function muestraArchivo(htmlDocument) {
	document.getElementById("content").innerHTML = '<object width=\"100%\" height=\"100%\" type="text/html" data="' + htmlDocument + '" ></object>';
}