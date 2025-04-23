const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras chinas (puedes poner más o cambiar)
const letras = '日月火水木金土天地風雲龍神鬼魔忍者愛夢心想魂'.split('');

const fontSize = 16;
const columnas = canvas.width / fontSize;

// Posiciones iniciales de las columnas
const lluvia = Array.from({ length: columnas }, () => 1);

function dibujar() {
  // Fondo negro con transparencia para efecto de rastro
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Color de las letras
  ctx.fillStyle = '#b26bff'; // Morado
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < lluvia.length; i++) {
    const letra = letras[Math.floor(Math.random() * letras.length)];
    const x = i * fontSize;
    const y = lluvia[i] * fontSize;

    ctx.fillText(letra, x, y);

    // Reiniciar aleatoriamente para efecto infinito
    if (y > canvas.height && Math.random() > 0.975) {
      lluvia[i] = 0;
    }

    lluvia[i]++;
  }
}

setInterval(dibujar, 50);

function animarTextoLetras() {
  const letras = document.querySelectorAll("#texto-animado span");

  let encenderIndex = 0;
  let apagarIndex = 0;
  let modo = "encender";

  function animar() {
    if (modo === "encender") {
      if (encenderIndex < letras.length) {
        letras[encenderIndex].classList.add("encendido");
        encenderIndex++;
      } else {
        modo = "apagar";
        apagarIndex = 0;
      }
    } else if (modo === "apagar") {
      if (apagarIndex < letras.length) {
        letras[apagarIndex].classList.remove("encendido");
        apagarIndex++;
      } else {
        modo = "encender";
        encenderIndex = 0;
      }
    }
  }

  setInterval(animar, 150); // Cambia la velocidad aquí si quieres
}

animarTextoLetras();

