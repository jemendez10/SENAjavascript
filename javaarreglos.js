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
marca:"BMW",
modelo:"r8",
referencia:2020,
numchasis:2345


},
{
marca:"Audi",
modelo:"x6",
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

//  for (var i = 0; i < arreglocarros.length; i++) {
// 	// alert(arreglocarros[i].marca+" "+arreglocarros[i].modelo)
// 	if (arreglocarros[i].referencia < 2019) {
// 		alert(arreglocarros[i].marca + " su tecnomecanica tiene un valor de 100000")
	
// 	}
// else{
// 	alert(arreglocarros[i].marca + "su tecnomecanica tiene un valor de 900000")
// }
		
// }
// while(arreglocarros[0].referencia > 2009){
// 	console.log (arreglocarros[0])
// arreglocarros[0].referencia= arreglocarros[0].referencia-1
// }
var marcacarro=prompt("ingrese una marca de carro")	
switch (marcacarro){
	case "BMW":
	alert("Estos son los carros BMW")
break;
	case "Chevrolet":
	alert("Estos son los carros Chevrolet")
break;
	case "Audi":
	alert("estos son los carros Audi")
	break;
	default:
	alert("ingrese nombre de algun carro")
}