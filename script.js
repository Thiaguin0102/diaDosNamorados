const dataInicio = new Date("2024-02-01T20:00:00"); // <--- altere aqui com a data do seu namoro

function atualizarContador() {
    const agora = new Date();
    let diff = agora - dataInicio;

    let segundos = Math.floor(diff / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    let anos = Math.floor(dias / 365);
    dias = dias % 365;

    let meses = Math.floor(dias / 30);
    dias = dias % 30;

    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    const texto = `${anos} ano ${meses} meses ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;

    document.getElementById("contador").textContent = texto;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();

const carrossel = document.querySelector('.carrossel');
const items = document.querySelectorAll('.fotos, .videos');
const itemCount = items.length;
let currentIndex = 0;
const intervalTime = 2000; // Time in milliseconds to show each item

const clonesToMake = 3; 
for (let i = 0; i < clonesToMake; i++) {
    carrossel.appendChild(items[i].cloneNode(true));
}

function scrollCarousel() {
    currentIndex++;
    const itemWidth = items[0].offsetWidth; 
    carrossel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    if (currentIndex >= itemCount) {
        setTimeout(() => {
            carrossel.style.transition = 'none'; 
            currentIndex = 0;
            carrossel.style.transform = `translateX(0)`;
            setTimeout(() => {
                carrossel.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500); 
        }
    }

setInterval(scrollCarousel, intervalTime);
