const hero = document.getElementById("heroImage");

// Cria as estrelas
function createStars(quantity) {
    for (let i = 0; i < quantity; i++) {

        const star = document.createElement("div");
        star.classList.add("star");

        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Tamanho aleatório
        const size = Math.random() * 3 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Delay diferente para cada estrela
        star.style.animationDelay = `${Math.random() * 2}s`;

        hero.appendChild(star);
    }
}

// Primeiro cria as estrelas
createStars(40);



// Agora adiciona o efeito de parallax
hero.addEventListener("mousemove", (e) => {
    // Depois pega todas elas
    const stars = hero.querySelectorAll(".star");

    const { offsetWidth, offsetHeight } = hero;

    const x = (e.offsetX / offsetWidth) - 0.5;
    const y = (e.offsetY / offsetHeight) - 0.5;

    stars.forEach((star, index) => {

        const speed = (index % 5 + 1) * 0.5;

        const moveX = x * speed * 10;
        const moveY = y * speed * 10;

        star.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});