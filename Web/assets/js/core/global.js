$(document).ready(function(){


	//Funciones Del modulo de usuarios
	$(document).on("submit", "#formCliente", function(){

		var retorno = true;

		// var nit = $('#nit').value;
		// var nombre = $('#nombre').value;
		// var apellido = $('#apellido').value;
		// var direccion = $('#direccion').value;
		// var celular = $('#celular').value;
		// var correo = $('#correo').value;

		var camposNoVacio = document.getElementsByClassName('novacio');

		//console.log(camposNoVacio);

		//alert('hay campos vacios');
		var contador = 0;

		for(var i = 0; i<camposNoVacio.length; i++){

			if(camposNoVacio[i].value.length < 1){
				contador++;
				retorno = false;

			}

		}

		if(contador > 0){
			$('#errorVacio').html("<span class='text-danger'>Por Favor no deje Campos Vacios</span>");
			
		}

		

		return retorno;

	});

	$(document).on("click",".cambiaEstado",function(){

		var url = $(this).attr("data-url");
		var id = $(this).attr("data-id");
		var estado = $(this).attr("data-estado");

		//alert(url+" : "+id+" : "+estado);

		$.ajax({

			url: url,
			type: "POST",
			data: "cli_id="+id+"&estado="+estado,
			success: function(datos){

				$('#tbodyConsultarCliente').html(datos);

			}

		});

	});

	/////////////////Fin jquery cliente///////////////////////


});