function validarRespuestas() {
    // Respuestas correctas
    const respuestasCorrectas = {
        q1: 'a', // Correcta es la opción 'a'
        q2: 'a', // Correcta es la opción 'a'
        q3: 'a', // Correcta es la opción 'a'
        q4: 'a', // Correcta es la opción 'a'
        q5: 'a', // Correcta es la opción 'a'
        q6: 'a', // Correcta es la opción 'a'
        q7: 'a', // Correcta es la opción 'a'
        q8: 'b', // Correcta es la opción 'b'
        q9: 'a', // Correcta es la opción 'a'
        q10: 'c'  // Correcta es la opción 'c'
    };

    let respuestasUsuario = document.getElementById('formularioCuestionario');
    let resultado = 0;
    let totalPreguntas = Object.keys(respuestasCorrectas).length;

    // Validamos cada respuesta
    for (let pregunta in respuestasCorrectas) {
        const respuestaCorrecta = respuestasCorrectas[pregunta];
        const respuestaUsuario = document.querySelector(`input[name="${pregunta}"]:checked`);

        if (respuestaUsuario && respuestaUsuario.value === respuestaCorrecta) {
            resultado++;
        }
    }

    // Mostrar el resultado
    let resultadoHTML = `Has respondido correctamente a ${resultado} de ${totalPreguntas} preguntas.`;
    document.getElementById('resultado').innerHTML = resultadoHTML;
}
