let numeroDeCliques = parseInt(localStorage.getItem("numeroDeCliques")) || 0;

const achievements = [
  {
    meta: 25,
    texto: "Seu mouse funciona! | Conte 25 cliques",
    sound: "sounds/achievement1.mp3",
  },
  {
    meta: 100,
    texto: "Alguém pegou gosto pela coisa | Conte 100 cliques",
    sound: "sounds/achievement1.mp3",
  },
  {
    meta: 200,
    texto: "É tão divertido assim? | Conte 200 cliques",
    sound: "sounds/achievement1.mp3",
  },
  {
    meta: 300,
    texto: "Já entendi, clicar é seu hobby | Conte 300 cliques",
    sound: "sounds/achievement1.mp3",
  },
  {
    meta: 400,
    texto: "Ninguém está te impedindo de parar... | Conte 400 cliques",
    sound: "sounds/achievement1.mp3",
  },
  {
    meta: 500,
    texto: "Terapia é uma opção | Conte 500 cliques",
    sound: "sounds/achievement1.mp3",
  },
  {
    meta: 505,
    texto: "O fim? | Pode clicar, mas não haverão novas conquistas",
    sound: "sounds/achievement1.mp3",
  },
];

let achievementsConquistados =
  JSON.parse(localStorage.getItem("achievements")) || [];

function atualizarTela() {
  document.getElementById("contador").innerText = numeroDeCliques;

  achievements.forEach((a) => {
    if (
      numeroDeCliques >= a.meta &&
      !achievementsConquistados.includes(a.meta)
    ) {
      mostrarAchievement(a.texto, a.sound);
      achievementsConquistados.push(a.meta);
      localStorage.setItem(
        "achievements",
        JSON.stringify(achievementsConquistados)
      );
    }
  });
}

function mostrarAchievement(texto, sound = null) {
  flashBackground(); // <-- chama o flash

  const div = document.createElement("div");
  div.className = "achievement";
  div.innerText = texto;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 5000);

  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
}

function flashBackground() {
  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 300); // deve ser igual (ou um pouco maior) que a duração da animação
}

function aumentar() {
  numeroDeCliques++;
  atualizarTela();
  localStorage.setItem("numeroDeCliques", numeroDeCliques);
}

function diminuir() {
  numeroDeCliques = Math.max(0, numeroDeCliques - 1);
  atualizarTela();
  localStorage.setItem("numeroDeCliques", numeroDeCliques);
}

function reiniciar() {
  numeroDeCliques = 0;
  achievementsConquistados = [];
  localStorage.setItem("numeroDeCliques", numeroDeCliques);
  localStorage.setItem(
    "achievements",
    JSON.stringify(achievementsConquistados)
  );
  atualizarTela();
}

atualizarTela();
