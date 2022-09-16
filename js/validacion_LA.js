//ENFOQUE DEL PRIMER CAMPO AL CARGAR LA PÁGINA
function foco()
{
	document.getElementById("nombre").focus();
}

//VALIDACIÓN CAMPO 'NOMBRE'
function val_nombre()
{
	var entrada = document.getElementById("nombre").value;
	var regex = /^[a-zÁ-ÿ\s]{5,40}$/i;

	if (!regex.test(entrada)) 
	{
		document.getElementById("nombre").style.cssText="border: 2px red solid !important;"
	}
	else
	{
		document.getElementById("nombre").style.cssText="border: 2px lightgreen solid !important;"
	}
}

//VALIDACIÓN CAMPO 'APELLIDO'
function val_apellido()
{
	var entrada = document.getElementById("apellidos").value;
	var regex = /^[a-zÁ-ÿ\s]{5,40}$/i;

	if (!regex.test(entrada)) 
	{
		document.getElementById("apellidos").style.cssText="border: 2px red solid !important;"
	}
	else
	{
		document.getElementById("apellidos").style.cssText="border: 2px lightgreen solid !important;"
	}
}

//VALIDACIÓN CAMPO 'EDAD'
function val_edad()
{
	var entrada = document.getElementById("edad").value;
	var regex = /(^[1-9]\s?$)|(^[1-9][0-9]\s?$)|(^1[01][0-9]?\s?$)/;

	if(!regex.test(entrada))
	{
		document.getElementById("edad").style.cssText="border: 2px red solid !important;"
	}
	else
	{
		document.getElementById("edad").style.cssText="border: 2px lightgreen solid !important;"
	}
}

//VALIDACIÓN CAMPO 'EMAIL'
function val_email()
{
	var entrada = document.getElementById("email").value;
	var regex = /^[\w-\.]+@[\w]+\.[a-z]{2,3}\s?$/;

	if (!regex.test(entrada)) 
	{
		document.getElementById("email").style.cssText="border: 2px red solid !important;"
	}
	else
	{
		document.getElementById("email").style.cssText="border: 2px lightgreen solid !important;"
	}
}

//VALIDACIÓN CAMPO 'TELÉFONO'
function val_telefono()
{
	var entrada = document.getElementById("telefono").value;
	var regex = /^(\+34)?[6789]+\d{8}\s?$/;

	if (!regex.test(entrada)) 
	{
		document.getElementById("telefono").style.cssText="border: 2px red solid !important;"
	}
	else
	{
		document.getElementById("telefono").style.cssText="border: 2px lightgreen solid !important;"
	}
}

//VALIDACIÓN CAMPO 'AÑO'
function val_fecha()
{
	var entrada = document.getElementById("fecha").value;
	var regex = /(^19[0-9]{2}\s?$)|(^20[0-9]{2}\s?$)|(^21[0]{2}\s?$)/;

	if (!regex.test(entrada)) 
	{
		document.getElementById("fecha").style.cssText="border: 2px red solid !important;"
	}
	else
	{
		document.getElementById("fecha").style.cssText="border: 2px lightgreen solid !important;"
	}
}

//VALIDACIÓN OBSERVACIONES
function val_observaciones()
{
	var entrada = document.getElementById("observaciones").value;
	var regex = /^.{1,120}$/;

	if (!regex.test(entrada)) 
	{
		document.getElementById("aviso").innerHTML="Entre 1-120 caracteres";
	}
	else
	{
		document.getElementById("aviso").style.cssText="display: block;"
	}
}

