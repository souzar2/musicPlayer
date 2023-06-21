let musicas = [
    {titulo:'Amarelo, azul e branco', artista:'Anavitoria', src:'musicas/01 Amarelo, azul e branco.mp3', img:'imagens/cor.jpeg'},
    {titulo:'Explodir', artista:'Anavitoria', src:'musicas/04 Explodir.mp3', img:'imagens/cor.jpeg'},
    {titulo:'Sparks Fly (Taylor\'s Version)', artista:'Taylor Swift', src:'musicas/02- Sparks Fly.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Back to December (Taylor\'s Version)', artista:'Taylor Swift', src:'musicas/03- Back To December.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Speak now (Taylor\'s Version)', artista:'Taylor Swift', src:'musicas/04- Speak Now.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'The story of us (Taylor\'s Version)', artista:'Taylor Swift', src:'musicas/07- The Story Of Us.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Enchanted (Taylor\'s Version)', artista:'Taylor Swift', src:'musicas/09- Enchanted.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Long Live (Taylor\'s Version)', artista:'Taylor Swift', src:'musicas/14- Long Live.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Born this way', artista:'Lady Gaga', src:'musicas/Born This Way.mp3', img:'imagens/born this way.jpg'}
];

shuffleArray(musicas);

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos%60;

    if (campoSegundos<10){
        campoSegundos = '0'+campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

// Função para sortear números aleatórios sem repetições em um intervalo
function getRandomNumber(min, max) {
    if (min > max) {
      throw new Error("O valor mínimo deve ser menor ou igual ao valor máximo.");
    }
  
    if (!getRandomNumber.initialized) {
      getRandomNumber.initialized = true;
      getRandomNumber.numbers = [];
    }
  
    if (getRandomNumber.numbers.length === 0) {
      for (let i = min; i <= max; i++) {
        getRandomNumber.numbers.push(i);
      }
      shuffleArray(getRandomNumber.numbers);
    }
  
    return getRandomNumber.numbers.pop();
  }
  
  // Função para embaralhar o array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }