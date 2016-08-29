var opcion = parseInt(prompt("ESCOGA UNA OPCIÓN:\n"+
    "1- suma (a+b)\n"+
    "2- resta (a-b)\n"+
    "3- multiplicación (a*b)\n"+
    "4- division (a/b)\n"+
    "5- resto (a%b)\n"+
    "6- menor que (a<b)\n"+
    "7- mayor que (a>b)\n"+
    "8- menor o igual que (a<=b)\n"+
    "9- mayor o igual que (a>=b)\n"+
    ("POR FAVOR INDIQUE EL NÚMERO DE LA OPCIÓN")));
var numero1 = parseInt(prompt("Inserte el primer número: "));
var numero2 = parseInt(prompt("Inserte el segundo número: "));
switch (opcion) {
     case 1:
        var suma = numero1 + numero2;
        window.alert("El resultado de la suma es: " + suma);
    break;
    case 2:
        var resta = numero1 - numero2;
        window.alert("El resultado de la resta es: " + resta);
    break;
    case 3:
        var multiplicacion = numero1 * numero2;
        window.alert("El resultado de la multiplicaión es: " + multiplicacion);
    break;
     case 4:
        var division = numero1 / numero2;
        window.alert("El resultado de la división es: " + division);
    break;
    case 5:
        var resto = numero1 % numero2;
        window.alert("El resultado del resto es: " + resto);
    break;
    case 6:
        var menorque = numero1 < numero2;
        if (menorque) {
            window.alert(numero1 + " MENOR QUE " + numero2);
        } else {
            window.alert(numero2 + " MENOR QUE " + numero1);
        }
    break;
    case 7:
        var mayorque = numero1 > numero2;
        if (mayorque) {
            window.alert(numero1 + " MAYOR QUE " + numero2);
        } else {
            window.alert(numero2 + " MAYOR QUE " + numero1);
        }
    break;
    case 8:
        var menorigualque = numero1 <= numero2;
        if (menorigualque) {
            window.alert(numero1 + "<= " + numero2);
        } else {
            window.alert(numero2 + " <= " + numero1);
        }
    break;
    case 9:
        var mayorigualque = numero1 >= numero2;
        if (mayorigualque) {
            window.alert(numero1 + ">= " + numero2);
        } else {
            window.alert(numero2 + " >= " + numero1);
        }
    break;
    default:
        window.alert("ESTE NÚMERO NO ES UNA OPCIÓN PARA OPERAR.\n"+
                     "VUELVE A INTENTARLO :)");
}
