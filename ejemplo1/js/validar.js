$(document).ready(function(){

$("#frmEjemplo1").validate({
	rules:{
		nombre : "required",
		apellidos : "required",
		distrito : "required"
	}
});
});
