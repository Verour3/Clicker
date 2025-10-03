let numeroDeCliques = parseInt(localStorage.getItem("numeroDeCliques")) || 0;

const achievements = [
  {
    meta: 25,
    texto: "Seu mouse funciona! | Conte 25 cliques",
    sound: "sounds/achievement1.mp3",
    image: "gifs/cat1.gif",
  },
  {
    meta: 100,
    texto: "Alguém pegou gosto pela coisa | Conte 100 cliques",
    sound: "sounds/achievement1.mp3",
    image: "gifs/cat2.gif",
  },
  {
    meta: 200,
    texto: "É tão divertido assim? | Conte 200 cliques",
    sound: "sounds/achievement1.mp3",
    image: "gifs/cat3.gif",
  },
  {
    meta: 300,
    texto: "Já entendi, clicar é seu hobby | Conte 300 cliques",
    sound: "sounds/achievement1.mp3",
    image: "gifs/cat4.gif",
  },
  {
    meta: 400,
    texto: "Ninguém está te impedindo de parar... | Conte 400 cliques",
    sound: "sounds/achievement1.mp3",
    image: "gifs/cat6.gif",
  },
  {
    meta: 500,
    texto: "Terapia é uma opção | Conte 500 cliques",
    sound: "sounds/achievement1.mp3",
    image: "gifs/gethelp.gif",
  },
  {
    meta: 510,
    texto: "O fim? | Pode clicar, mas não haverão novas conquistas",
    sound: "sounds/achievement1.mp3",
    image: "gifs/end.gif",
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
      mostrarAchievement(a.texto, a.sound, a.image);
      achievementsConquistados.push(a.meta);
      localStorage.setItem(
        "achievements",
        JSON.stringify(achievementsConquistados)
      );
    }
  });
}

function mostrarAchievement(texto, sound = null, image = null) {
  flashBackground();

  const div = document.createElement("div");
  div.className = "achievement";
  div.innerText = texto;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 5000);

  if (sound) {
    const audio = new Audio(sound);
    audio.play();

    if (image) {
      const gif = document.createElement("img");
      gif.src = image;
      gif.alt = "Achievement";
      gif.className = "achievement-float";
      document.body.appendChild(gif);

      setTimeout(() => gif.remove(), 3000);
    }
  }
}

function flashBackground() {
  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 300);
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
