# Declaracion de variables JavaScript

## Variables

las variables en JS se crean mediante la palabra reservada var, por ejemplo
 var numero_1
 var numero_2

Solo se debe declarar una vez la variable, cuando se utiliza en el resto del codigo basta con llamarlas por su nombre.

El nombre de una variable tambien se conoce como identificador y debe cumplir las siguientes normas

* solo puede estar formado por letras, números   y los símbolos $(dolar) y _ (guion).
* El primer caráracter no puede ser un número.

ejemplos

var $numero1;

var _$letra;

var $$$otronumero;

var $_a_$4;

## Tipos de variables

### Globales

Las variables globales las defines fuera de cualquier funciòn u objeto

### Locales

Las variables locales se definen dentro de la funcion

### Numericas

se utilizan para alamcenar valores númericos enteros o decimales.

var iva=16;
var total= 234.65;

### Cadena de texto

 var mensaje ="Bienvenido ";
 var nombreProducto ="Producto ABC";
 var letraseleccionada = 'C'

### Arrays

Un array es una colecciòn de variables, que pueden ser todas del mismo tipo o cada una de un tipo diferente.

var dias= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

### Booleanos

Las variables de tipo boolean o booleano tambièn se concocen con el nombre de variables de tipo lògico.

var ClienteRegistrado = false;

## Operadores

Las variables por si solas son de poca utilidad. Los operadores permiten manipular el valor de las variable, realizar operaciones matemàticas con su valores y comparar diferentes variables.

### Asignaciòn

 El operador de asignaciòn es el màs utilizado y el màs sencillo. este operador se utiliza para guardar un valor en una variable.

 var numero1=3;

### Incremento y decremento

Estos operadores solamente son vàlidos para las variables numèricas y se utilizan para incrementar o decrementar en una unidad el valor de una variable.
El operador de incremento se indica mediante el prefijo ++ y en caso contrario --
vr numero =5;
++numero;
aler(numero);

## Logicos

los operadores logicos son imprescindibles para realizar aplicaciones complejas ya que se utilizan para tomr decisiones sobre las instrucciones que deberia ejecutar el programa en funcion de ciertas condiciones.

### Negaciòn

Uno de los operadores logicos mas utilizados es el de negaciòn. Se utiliza para obtener el valor contrario.
La negaciòn lògica se obtiene prefijando el simbolo ! al identificador de la variable.

var visible = !false

### AND

La operaciòn lògica AND obtiene su resultado combinando dos valores booleanos. El operador se indica mediante el simbolo && y su resultado solamente es true si los dos operandos son true.

var valor1= true;
var valor 2 = false;
resultado = valor1 && valor2;

### OR

La operaciòn lògica OR tambièn combina dos valores booleanos. El operador se indica mediante el simbolo ||.

var valor1= true;
var valor 2 = false;
resultado = valor1 || valor2;

### Matemàticos

JavaScript permite realizar manipulaciones matematicas sobre el valor de las variables numericas los operadores definidos son +, -, *, /

### Relaionales

Los operadores relacionales definidos por Js son identicos  a los definidos por las matematicas, mayor que ()>), menor que (<), mayor o igual (>=), menor igual(<=), igual que (==) y distinto que ( != )