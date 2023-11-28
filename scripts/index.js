function calcularPrestamo() {
    let realizarConsulta = true;

    while (realizarConsulta) {
        // Solicitar monto y cuotas
        const monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
        const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (1 a 12):"));

        
        if (monto <= 0 || cuotas <= 0 || cuotas > 12 ) {
            console.log("Entrada no válida. Asegúrese de ingresar números válidos y una cantidad de cuotas entre 1 y 12.");
            continue; 
        }

        let interes = 0;
        let totalPagar = 0;
        let cuotaMensual = 0;

        if (cuotas >= 1 && cuotas <= 3) {
            interes = monto * 0.3;
        } else if (cuotas >= 4 && cuotas <= 6) {
            interes = monto * 0.5;
        } else if (cuotas >= 7 && cuotas <= 9) {
            interes = monto;
        } else if (cuotas >= 10 && cuotas <= 12) {
            interes = monto * 1.5;
        } else {
            console.log("Número de cuotas no válido");
            continue; // Reiniciar para una nueva consulta
        }

        totalPagar = monto + interes;
        cuotaMensual = totalPagar / cuotas;

        // Mostrar resultados
        console.log("Monto total a pagar:", totalPagar);
        console.log("Monto de cada cuota mensual:", cuotaMensual);
        console.log("Interés total:", interes);

        // Preguntar si desea realizar otra consulta
        const respuesta = prompt("¿Desea realizar otra consulta? (Sí/No)").toLowerCase();
        realizarConsulta = respuesta === 'si';
    }

    console.log("Gracias por usar nuestro servicio de préstamos.");
}


calcularPrestamo();


calcularPrestamo();