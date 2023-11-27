let nombre = prompt ('Hola, como es tu nombre?');
let prestamo = prompt (`Bien ${nombre}, acabas de ingresar a nuestra web de simulacion de prestamos, cual es el monton que desea solicitar? `);

if prestamo > 1000000 {prompt('El monton excede la cantidad maxima que estamos dando actualmente, intenta un numero menor a 1000000')};