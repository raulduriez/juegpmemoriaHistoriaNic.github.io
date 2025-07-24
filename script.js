document.addEventListener('DOMContentLoaded', function() {
    // Datos de especies en peligro de extinción con SVGs
    const speciesData = [
        {
            id: 1,
            name: "Comandante Carlos Fonseca Amador",
            img : "img/cf.jpg",
            description: "Nace el 23 de Junio del año 1936, fue un profesor, político, escritor y revolucionario nicaragüense, Fundador  del Frente Sandinista de Liberación Nacional (FSLN). fue asesinado el 8 de Noviembre  en combate en 1976.",
            status: "Frace del comandante : El Revolucionario tiene espíritu contemple de acero, y no se amilana ante los fracasos que se produce en el trancurso de la lucha, y particularmente en la etapa inicial [...] Se vuelve urgentisimo que el movimiento revolucionario esté preparado para enfrentar a las celadas que inebitablemente llevarán a cabo los representantes de la clases capitalista que todavia influyen en ciertos sectores del pueblo "
        },
        {
            id: 2,
            name: "Comandante Tomas Borge Martienez ",
           img : "img/tm.jpg",
            description: "Aunque su estado ha mejorado, el panda gigante sigue vulnerable con aproximadamente 1,800 ejemplares en libertad. La fragmentación de su hábitat es su mayor amenaza.",
            status: "Vulnerable - Población en lenta recuperación"
        },
        {
            id: 3,
            name: "Comandante Silvio Mayorga ",
            img : "img/sm.jpg",
            description: "Con menos de 1,000 ejemplares, el gorila de montaña enfrenta amenazas por la caza furtiva, enfermedades y la pérdida de hábitat debido a la actividad humana.",
            status: "En peligro crítico - Población muy reducida"
        },
        {
            id: 4,
            name: "Comandante German Pomares Ordoñez EL DANTO",
           img : "img/Gp.jpg",
            description: "La tortuga laúd es la más grande de todas las tortugas marinas y está en peligro crítico debido a la pesca incidental, la contaminación y el cambio climático.",
            status: "En peligro crítico - Disminución del 90% en tres generaciones"
        },
        {
            id: 5,
            name: "Rigoberto Cruz ( Pablo Ubeda EL CADEJO) ",
            img : "img/Rc.jpg",
            description: "Es uno de los mamíferos más raros del mundo con menos de 80 ejemplares. La caza furtiva por su cuerno es la principal causa de su situación crítica.",
            status: "En peligro crítico - Al borde de la extinción"
        },
        {
            id: 6,
            name: "Comandante Jorge Navarro",
            img :"img/Gr.jpg",
            description: "Con menos de 14,000 ejemplares, el orangután de Sumatra pierde su hábitat debido a la deforestación para plantaciones de aceite de palma.",
            status: "En peligro crítico - Pérdida de hábitat acelerada"
        },
        {
            id: 7,
            name: "Comandante Francisco Buitrago",
           img : "img/Fb.jpg",
            description: "Habita en las montañas de Asia Central con menos de 6,500 ejemplares. La caza furtiva y el cambio climático amenazan su supervivencia.",
            status: "Vulnerable - Población en descenso"
        },
        {
            id: 8,
            name: "Comandante Camilo Ortega Saavedra",
           img :"img/Co.jpg",
            description: "Un 13 de diciembre de 1950 en la ciudad de Managua nace un ejemplar combatiente y estandarte de la unidad sandinista, el Comandante Camilo Antonio Ortega Saavedra conocido popularmente como “Mundo”. Proviene de una familia muy humilde, pero con grandes ideales revolucionarios. Sus padres Daniel Ortega y su madre Lidia Saavedra ambos le inculcaron a sus seis hijos a defender la igualdad social y el igualitarismo..",
            status: "El 26 de Febrero 1978 , cae en combate en el lugar conocido como Las Sabogales, un pequeño poblado de Masaya,  la masacre de la Guardia somocista contra el pueblo nicaragüense. Pero un hombre valiente en medio del fuego de las ametralladoras, gritaba “¡Viva el Frente Sandinista!”. Era el grito de fuerza del Comandante Camilo Ortega Saavedra, quien junto a sus compañeros de lucha Moisés Rivera y Arnoldo Quant, se enfrentaba con escasas armas a las tropas de la infantería somocista EEBI y horas después caían heridos para luego ser torturados y asesinados en la mesa de los tormentos. El cuerpo del comandante Camilo quedó totalmente desfigurado debido a los crueles golpes por los verdugos de Somoza"
        },
        {
            id: 9,
            name: "Compañera Mildre Abaunza",
           img :"img/Ma.jpg",
            description: "El 4 de Febrero de 1976, cayo en combate la compañera Mildred Abaunza en la Colonia Centroamerica ciudad de Managua. Mildred Abaunza Gutiérrez, militante del Frente Sandinista de Liberación Nacional y guerrillera urbana, era originaria de Bonanza, en el Triángulo Minero. Era una de las colaboradoras más firmes con la que contaba el comandante Tomás Borge .",
            status: "En peligro crítico - Al borde de la extinción"
        },
        {
            id: 10,
            name: "Compañera Arlen Siu Bermudez",
           img : "img/As.jpg",
            description: "El 15 de julio de 1955 nace Arlen Siu Bermúdez en en la ciudad de Jinotepe, Carazo, Nicaragua. Guerrillera jinotepina sandinista, fue una gran revolucionaria, una de las mártires más recordadas de la Revolución Sandinista. Tenía 18 años cuando se unió al FSLN. el 21 de MArzo 1975 Arlen Siu pasó a la clandestinidad  .",
            status: "El 1° de agosto de 1975, la Guardia Nacional localizó cerca del poblado llamado El Sauce un campo de entrenamiento sandinista. Se libró un fuerte combate en el que Arlen Siu ayudó, hasta ser abatida junto con otros jóvenes combatientes, a cubrir la retirada de sus compañeros. Tenía en ese momento 20 años recién cumplidos. El lugar donde quedaron sus restos no se reveló a sus familiares ni sus compañeros hasta que, con el triunfo de la Revolución en 1979, fueron recuperados. Junto a ella cayeron los combatientes Mario Estrada, Gilberto Rostrán, Julia Herrera de Pomares, Mercedes Reyes, Hugo Arévalo, Juan y Leónidas Espinoza"
        },
        {
            id: 11,
            name: "Mujeres del Cua",
            img : "img/Mc.jpg",
            description: "Las mujeres del Cuá es un grupo de mujeres campesinas nicaragüenses que durante el período de la lucha insurreccional contra la dictadura de Anastasio Somoza Debayle, en los años 1960 y 1970 , dieron protección y cobijo, colaborando en acciones logísticas, a los guerrilleros del Frente Sandinista de Liberación Nacional, ocasionando que fueran reprimidas duramente sufriendo toda clases de vejaciones como torturas, violación y asesinatos en el cuartel de El Cuá de la Guardia Nacional CUA BOCAY del departamento de Jinotega. Las mujeres procedían de las comunidades El Carmen, Cuskawás, el Bijao y la Tronca; ninguna de ellas era oriunda del municipio de El Cuá.",
            status: "Mujeres del cua su legado continua : Amando Aguilar (Maria de la Cruz, fue cocinera del General Sandino), Natividad MArtinez (hija del Sindicalista Maximo Martinez ), Maria Venancia, Candida Maria Gonzalez , Candida Martinez , Martina Gonzalez entre otras .. compañeras"
        },
        {
            id: 12,
            name: "Compañera Concepcion Palacios ( Conchita)",
           img : "img/Cp.jpg",
            description: "Nació el 5 de Diciembre en el Sauce, León en el año 1893, Fué la primera mujer doctora en Medicina nicaraguense y centroamericana. Atendió a obreras, apoyó la revolución sandinista y trabajó como voluntaria en la Segunda Guerra Mundial, fallecio el 2 de Mayo del  año de 1981.",
            status: "Su legado continua vigente en los corazones revolucionario, el complejo salud central de Nicaragua lleva su nombre en honor a esta gran mujer"
        }
    ];

    // Variables del juego
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let isProcessing = false;
    let gameStarted = false;
    let timerInterval;
    let seconds = 0;
    let attempts = 0;

    // Elementos DOM
    const gameBoard = document.getElementById('game-board');
    const timerElement = document.getElementById('timer');
    const pairsElement = document.getElementById('pairs');
    const attemptsElement = document.getElementById('attempts');
    const restartBtn = document.getElementById('restart-btn');
    const infoModal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalStatus = document.getElementById('modal-status');
    const closeModalBtn = document.getElementById('close-modal');
    const continueBtn = document.getElementById('continue-btn');
    const victoryModal = document.getElementById('victory-modal');
    const finalTimeElement = document.getElementById('final-time');
    const finalAttemptsElement = document.getElementById('final-attempts');
    const playAgainBtn = document.getElementById('play-again-btn');

    // Iniciar juego
    initGame();

    // Función para iniciar el juego
    function initGame() {
        resetGame();
        createCards();
        renderCards();
        
        // Event listeners
        restartBtn.addEventListener('click', initGame);
        closeModalBtn.addEventListener('click', closeInfoModal);
        continueBtn.addEventListener('click', closeInfoModal);
        playAgainBtn.addEventListener('click', initGame);
    }

    // Función para resetear el juego
    function resetGame() {
        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        isProcessing = false;
        gameStarted = false;
        seconds = 0;
        attempts = 0;
        
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        timerElement.textContent = '00:00';
        pairsElement.textContent = '0/12';
        attemptsElement.textContent = '0';
        
        gameBoard.innerHTML = '';
    }

    // Función para crear las cartas
    function createCards() {
        // Crear pares de cartas
        for (let i = 0; i < speciesData.length; i++) {
            // Crear dos cartas con el mismo id (par)
            for (let j = 0; j < 2; j++) {
                cards.push({
                    id: speciesData[i].id,
                     img: speciesData[i].img, // ← propiedad correcta
                    name: speciesData[i].name,
                     flipped: false,
                    matched: false
                });
            }
        }
        
        // Mezclar las cartas
        shuffleCards();
    }

    // Función para mezclar las cartas
    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    // Función para renderizar las cartas
    function renderCards() {
        gameBoard.innerHTML = '';
        
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = `card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''} aspect-square`;
            cardElement.dataset.index = index;
            
            cardElement.innerHTML = `
                <div class="card-inner h-full">
                    <div class="card-front">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="card-back bg-white">
                        <div class="card-image">
                          <img src="${card.img}" alt="${card.name}" class="w-full h-full object-contain" />
                           
                        </div>
                    </div>
                </div>
            `;
            
            cardElement.addEventListener('click', () => flipCard(index));
            gameBoard.appendChild(cardElement);
        });
    }

    // Función para voltear una carta
    function flipCard(index) {
        // Evitar procesar múltiples cartas a la vez o cartas ya volteadas/emparejadas
        if (isProcessing || cards[index].flipped || cards[index].matched) {
            return;
        }
        
        // Iniciar el temporizador si es la primera carta volteada
        if (!gameStarted) {
            startTimer();
            gameStarted = true;
        }
        
        // Voltear la carta
        cards[index].flipped = true;
        flippedCards.push(index);
        
        // Actualizar la visualización
        renderCards();
        
        // Si hay dos cartas volteadas, verificar si son un par
        if (flippedCards.length === 2) {
            isProcessing = true;
            attempts++;
            attemptsElement.textContent = attempts;
            
            const firstCardIndex = flippedCards[0];
            const secondCardIndex = flippedCards[1];
            
            if (cards[firstCardIndex].id === cards[secondCardIndex].id) {
                // Es un par
                setTimeout(() => {
                    cards[firstCardIndex].matched = true;
                    cards[secondCardIndex].matched = true;
                    flippedCards = [];
                    isProcessing = false;
                    matchedPairs++;
                    pairsElement.textContent = `${matchedPairs}/12`;
                    
                    // Mostrar información sobre la especie
                    const speciesInfo = speciesData.find(species => species.id === cards[firstCardIndex].id);
                    showInfoModal(speciesInfo);
                    
                    // Verificar si el juego ha terminado
                    if (matchedPairs === 12) {
                        endGame();
                    }
                    
                    renderCards();
                }, 500);
            } else {
                // No es un par
                setTimeout(() => {
                    cards[firstCardIndex].flipped = false;
                    cards[secondCardIndex].flipped = false;
                    flippedCards = [];
                    isProcessing = false;
                    renderCards();
                }, 1000);
            }
        }
    }

    // Función para iniciar el temporizador
    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    // Función para mostrar el modal de información
    function showInfoModal(species) {
        modalTitle.textContent = species.name;
        modalImage.innerHTML = `<img src="${species.img}" alt="${species.name}" class="modal-image" />`;
        modalDescription.textContent = species.description;
        modalStatus.textContent = species.status;
        infoModal.classList.add('active');
    }

    // Función para cerrar el modal de información
    function closeInfoModal() {
        infoModal.classList.remove('active');
        renderCards();
    }

    // Función para finalizar el juego
    function endGame() {
        clearInterval(timerInterval);
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        
        finalTimeElement.textContent = timeString;
        finalAttemptsElement.textContent = attempts;
        
        setTimeout(() => {
            victoryModal.classList.add('active');
            createConfetti();
        }, 1000);
    }

    // Función para crear efecto de confeti
    function createConfetti() {
        const confettiCount = 100;
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `-10px`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);
            
            // Animación de caída
            setTimeout(() => {
                confetti.style.transition = `top ${Math.random() * 3 + 2}s linear, left ${Math.random() * 3 + 2}s ease-in-out, opacity 1s ease-out ${Math.random() * 3 + 2}s`;
                confetti.style.opacity = '1';
                confetti.style.top = `${Math.random() * 100 + 100}%`;
                confetti.style.left = `${Math.random() * 100}%`;
                
                // Eliminar confeti después de la animación
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, 10);
        }
    }
});