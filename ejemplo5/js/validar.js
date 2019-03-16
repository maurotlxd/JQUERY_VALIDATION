$(document).ready(function(){

/*
Los datos del  formulario serán enviados solo cuando se hayan cumplido
las reglas de validacion.
*/
 jQuery.validator.addMethod("emailValidate", function(value, element) {
  return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(value);
}, '<span style="color:red;">Escribe una contraseña correcta.</span>');
$("#frmEjemplo5").validate({
	rules:{
		clave: "emailValidate",
		claveConfirm:{
			equalTo: "#clave"
		}
	}
          


});
});
