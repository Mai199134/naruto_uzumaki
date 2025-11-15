  const pantalla = document.querySelector('.pantalla');
  const botones = document.querySelectorAll('button');

  let operacionActual = '';
  let resultadoMostrado = false;

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const valor = boton.textContent;

      if (valor === '=') {
        try {
          operacionActual = eval(operacionActual).toString();
          pantalla.textContent = operacionActual;
          resultadoMostrado = true;
        } catch (error) {
          pantalla.textContent = 'Error';
          operacionActual = '';
        }
      } else {
        if (resultadoMostrado && !isNaN(valor)) {
          operacionActual = valor;
          resultadoMostrado = false;
        } else {
          operacionActual += valor;
        }
        pantalla.textContent = operacionActual;
      }
    });
  });