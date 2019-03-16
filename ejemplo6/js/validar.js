$(document).ready(function(){
jQuery.validator.addMethod("claveValidate", function(value, element) {
  return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(value);
}, '<span style="color:red;">Escribe una contraseña correcta.</span>');

jQuery.validator.addMethod("stringValidate", function(value, element) {
  return this.optional(element) || /^[a-zA-Z]+$/.test(value);
}, '<span style="color:red;">Ingrese solo letras.</span>');

jQuery.validator.addMethod("userValidate", function(value, element) {
  return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, '<span style="color:red;">Ingrese letras o números.</span>');
 /*
Los datos del  formulario serán enviados solo cuando se hayan cumplido
las reglas de validacion.
*/
$("#frmEjemplo6").validate({
	rules:{
		nombres: "stringValidate",
		apellidos: "stringValidate",
		usuario : "userValidate",
		clave: "claveValidate",
		claveConfirm:{
			equalTo: "#clave"
		}
	},
            errorPlacement: function(error,element){
              error.addClass("rojo");
              error.insertAfter(element)
            },
           highlight: function (element) {
           	   $(element).removeClass('is-valid').addClass('is-invalid');
           },
           unhighlight: function (element) {
               $(element).removeClass('is-invalid').addClass('is-valid');
           }
});
});
