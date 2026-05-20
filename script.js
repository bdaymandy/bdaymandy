// ========================================
// SCROLL SUAVE
// ========================================

const links = document.querySelectorAll('nav a');

links.forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault();

    const id = link.getAttribute('href');

    const section = document.querySelector(id);

    if(section){

      section.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});

// ========================================
// EFEITO 3D NOS CARDS
// ========================================

const cards = document.querySelectorAll('.champion-card');

cards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = '';

  });

});

// ========================================
// PARALLAX DA LUZ
// ========================================

window.addEventListener('mousemove', (e) => {

  const light = document.querySelector('.light');

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  light.style.transform = `
    translate(${x * 40}px, ${y * 40}px)
  `;

});

// ========================================
// ANIMAÇÃO AUTOMÁTICA DOS CARDS
// ========================================

const sideCards = document.querySelectorAll('.side-card');

sideCards.forEach((card, index) => {

  card.animate(

    [
      {
        transform: 'translateY(0px)'
      },

      {
        transform: 'translateY(-15px)'
      },

      {
        transform: 'translateY(0px)'
      }
    ],

    {
      duration: 4000 + (index * 1000),
      iterations: Infinity
    }

  );

});

// ========================================
// EFEITO GLOW NOS BOTÕES
// ========================================

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

  button.addEventListener('mouseenter', () => {

    button.style.boxShadow =
    '0 0 25px rgba(255,220,150,.5)';

  });

  button.addEventListener('mouseleave', () => {

    button.style.boxShadow = 'none';

  });

});

// ========================================
// EFEITO DE ENTRADA DAS SEÇÕES
// ========================================

const sections = document.querySelectorAll(
  '.hero, .champions-section, .hero-rpg-section, .mission-section'
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show-section');

    }

  });

}, {
  threshold: 0.2
});

sections.forEach(section => {

  section.classList.add('hidden-section');

  observer.observe(section);

});

// ========================================
// EFEITO TILT PERSONAGEM CENTRAL
// ========================================

const heroCharacter = document.querySelector('.hero-character');

if(heroCharacter){

  heroCharacter.addEventListener('mousemove', (e) => {

    const rect = heroCharacter.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    heroCharacter.style.transform = `
      perspective(1200px)
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
      scale(1.02)
    `;

  });

  heroCharacter.addEventListener('mouseleave', () => {

    heroCharacter.style.transform = '';

  });

}

// ========================================
// TEXTO DIGITANDO NO HERO
// ========================================

const title = document.querySelector('.title');

if(title){

  const originalText = title.innerText;

  title.innerText = '';

  let i = 0;

  function typingEffect(){

    if(i < originalText.length){

      title.innerText += originalText.charAt(i);

      i++;

      setTimeout(typingEffect, 90);

    }

  }

  typingEffect();

}

// ========================================
// EFEITO DE PARTÍCULAS LEVES
// ========================================

function createParticle(){

  const particle = document.createElement('div');

  particle.classList.add('particle');

  document.body.appendChild(particle);

  const size = Math.random() * 4 + 2;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = Math.random() * window.innerWidth + 'px';

  particle.style.animationDuration =
  (Math.random() * 5 + 5) + 's';

  setTimeout(() => {

    particle.remove();

  }, 10000);

}

setInterval(createParticle, 300);

// ========================================
// EFEITO AUDIO VISUAL
// ========================================

window.addEventListener('click', () => {

  document.body.classList.add('site-active');

}, { once:true });

// ========================================
// MOUSE LIGHT FOLLOW
// ========================================

const cursorLight = document.createElement('div');

cursorLight.classList.add('cursor-light');

document.body.appendChild(cursorLight);

window.addEventListener('mousemove', (e) => {

  cursorLight.style.left = e.clientX + 'px';
  cursorLight.style.top = e.clientY + 'px';

});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(`
========================================
EPIC CINEMATIC WEBSITE INITIALIZED
========================================
`);