// var nombre="miguel"
// var apellido="popper"
// alert("pendejoooo "+nombre+" "+apellido)
// alert("666")
var arreglocarros=[
{
marca:"BMW",
modelo:"M3",
referencia:2015,
numchasis:2345


},
{
marca:"Audi",
modelo:"A3",
referencia:2019,
numchasis:2456

},
{
marca:"Chevrolet",
modelo:"Captiva",
referencia:2017,
numchasis:2882
}
]

 for (var i = 0; i < arreglocarros.length; i++) {
	// alert(arreglocarros[i].marca+" "+arreglocarros[i].modelo)
	if (arreglocarros[i].referencia < 2019) {
		alert(arreglocarros[i].marca + " su tecnomecanica tiene un valor de 100000")
	
	}
else{
	alert(arreglocarros[i].marca + "su tecnomecanica tiene un valor de 900000")
}
			
}

