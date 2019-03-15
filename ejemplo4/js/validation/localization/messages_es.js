(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
$.extend( $.validator.messages, {
	required: "<span style='color:red'>Este campo es obligatorio.</span>",
	remote: "<span style='color:red'>Por favor, rellena este campo.</span>",
	email: "<span style='color:red'>Por favor, escribe una dirección de correo válida.</span>",
	url: "<span style='color:red'>Por favor, escribe una URL válida.</span>",
	date: "<span style='color:red'>Por favor, escribe una fecha válida.</span>",
	dateISO: "<span style='color:red'>Por favor, escribe una fecha (ISO) válida.</span>",
	number: "<span style='color:red'>Por favor, escribe un número válido.</span>",
	digits: "<span style='color:red'>Por favor, escribe sólo dígitos.</span>",
	creditcard: "<span style='color:red'>Por favor, escribe un número de tarjeta válido.</span>",
	equalTo: "<span style='color:red'>Por favor, escribe el mismo valor de nuevo.</span>",
	accept:"<span style='color:red'>Solo se aceptan archivos de imagen</span>",
	extension: "<span style='color:red'>Solo se aceptan imagenes PNG,JPG,JPEG",
	maxlength: $.validator.format( "<span style='color:red'>Por favor, no escribas más de {0} caracteres.</span>" ),
	minlength: $.validator.format( "<span style='color:red'>Por favor, no escribas menos de {0} caracteres.</span>" ),
	rangelength: $.validator.format( "<span style='color:red'>Por favor, escribe un valor entre {0} y {1} caracteres.</span>" ),
	range: $.validator.format( "<span style='color:red'>Por favor, escribe un valor entre {0} y {1}.</span>" ),
	max: $.validator.format( "<span style='color:red'>Por favor, escribe un valor menor o igual a {0}." ),
	min: $.validator.format( "<span style='color:red'>Por favor, escribe un valor mayor o igual a {0}." ),
	nifES: "Por favor, escribe un NIF válido.",
	nieES: "Por favor, escribe un NIE válido.",
	cifES: "Por favor, escribe un CIF válido."
} );
return $;
}));