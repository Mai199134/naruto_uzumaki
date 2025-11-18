const quizContainer = document.getElementById("quiz-container");

quizContainer.innerHTML = `
  <h2>¿Cuánto sabes de crear una empresa?</h2>
  <form id="quizForm">
    ${crearPreguntas()}
    <div style="text-align:center;">
      <button type="button" onclick="calcularResultado()">Enviar respuestas</button>
    </div>
    <div class="result" id="result"></div>
  </form>
`;

function crearPreguntas() {
  const preguntas = [
    {
      texto: "¿Qué es un plan de negocios?",
      opciones: ["Un documento legal obligatorio", "Una guía estratégica para iniciar y operar una empresa", "Un resumen financiero anual"],
      correcta: 1
    },
    {
      texto: "¿Qué entidad registra legalmente una empresa en Colombia?",
      opciones: ["DIAN", "Cámara de Comercio", "Ministerio de Trabajo"],
      correcta: 1
    },
    {
      texto: "¿Qué es el NIT?",
      opciones: ["Número de Inversión Total", "Número de Identificación Tributaria", "Nombre Institucional Técnico"],
      correcta: 1
    },
    {
      texto: "¿Cuál es una ventaja del emprendimiento?",
      opciones: ["No pagar impuestos", "Menos responsabilidad legal", "Independencia financiera y creatividad"],
      correcta: 2
    },
    {
      texto: "¿Qué es el capital semilla?",
      opciones: ["Ganancias del primer año", "Dinero inicial para arrancar un negocio", "Préstamo bancario obligatorio"],
      correcta: 1
    },
    {
      texto: "¿Qué representa el logo de una empresa?",
      opciones: ["Registro legal", "Identidad visual y marca", "Contrato de trabajo"],
      correcta: 1
    }
  ];

  return preguntas.map((p, i) => `
    <div class="question">
      <p>${i + 1}. ${p.texto}</p>
      ${p.opciones.map((op, j) => `
        <label>
          <input type="radio" name="q${i}" value="${j === p.correcta ? 1 : 0}"> ${op}
        </label><br>
      `).join("")}
    </div>
  `).join("");
}

function calcularResultado() {
  let total = 0;
  for (let i = 0; i < 6; i++) {
    const respuesta = document.querySelector(`input[name="q${i}"]:checked`);
    if (respuesta) {
      total += parseInt(respuesta.value);
    }
  }

  const resultDiv = document.getElementById("result");
  let mensaje = "";
  let imagen = "";

  if (total === 6) {
    mensaje = "¡Excelente! Sabes mucho sobre crear empresas.";
    imagen = "./img/primer premio.png";
  } else if (total >= 3) {
    mensaje = "¡Buen intento! Tienes conocimientos sólidos.";
    imagen = "./img/segundo premio.png";
  } else {
    mensaje = "¡Sigue aprendiendo! El camino empresarial apenas comienza.";
    imagen = "./img/perdedor.png";
  }

  resultDiv.innerHTML = `<p>Respuestas correctas: ${total} de 6</p><p>${mensaje}</p><img src="${imagen}" alt="Resultado" style="max-width:300px;">`;
}