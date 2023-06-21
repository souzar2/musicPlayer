let musicas = [
    {titulo:'Amarelo, azul e branco', artista:'Anavitoria', src:'musicas/01 Amarelo, azul e branco.mp3', img:'imagens/cor.jpeg'},
    {titulo:'Explodir', artista:'Anavitoria', src:'musicas/04 Explodir.mp3', img:'imagens/cor.jpeg'},
    {titulo:'Sparks Fly', artista:'Taylor Swift', src:'musicas/02- Sparks Fly.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Back to December', artista:'Taylor Swift', src:'musicas/03- Back To December.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Speak now', artista:'Taylor Swift', src:'musicas/04- Speak Now.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'The story of us', artista:'Taylor Swift', src:'musicas/07- The Story Of Us.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Enchanted', artista:'Taylor Swift', src:'musicas/09- Enchanted.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Long Live', artista:'Taylor Swift', src:'musicas/14- Long Live.mp3', img:'imagens/Speak NowTV.png'},
    {titulo:'Born this way', artista:'Lady Gaga', src:'musicas/Born This Way.mp3', img:'imagens/born this way.jpg'}
];


let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('descricao h2');
let nomeArtista = document.querySelector('descricao i');

let duracaoMusica = document.querySelector('.fim');
duracaoMusica.textContent = minutosParaSegundos(musica.duration);

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
    tempoDecorrido.textContent = minutosParaSegundos(Math.floor(musica.currentTime));
}

function minutosParaSegundos(segundos){
    segundos = Math.floor(segundos);
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos%60;

    if (campoSegundos<10){
        campoSegundos = '0'+campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}