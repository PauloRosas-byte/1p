print("Escribe un número: ");
var dia = readline();
dia = parseFloat(dia);

switch(dia){
case 1:{print('lunes');break;}
case 2:{print('Martes');break;}
case 3:{print('Miercoles');break;}
case 4:{print('Jueves');break;}
case 5:{print('Viernes');break;}
case 6:{print('Sabado');break;}
case 7:{print('Domingo');break;}
default:print('error de entrada: ' + dia);
}
