


document.getElementById("year").textContent = new Date().getFullYear();


const typedText = ["a Frontend Developer", "a Full-Stack Engineer", "a UI/UX Enthusiast"];
let typedIndex = 0, charIndex = 0;
const typedEl = document.getElementById("typed");
function typeEffect() {
  if (charIndex < typedText[typedIndex].length) {
    typedEl.textContent += typedText[typedIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typedEl.textContent = "";
      charIndex = 0;
      typedIndex = (typedIndex + 1) % typedText.length;
      typeEffect();
    }, 2000);
  }
}
typeEffect();


function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();


function animateBars() {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    if (bar.style.width === "0%") {
      if (bar.classList.contains("bg-blue-500")) bar.style.width = "95%"; // HTML & CSS
      if (bar.classList.contains("bg-yellow-400")) bar.style.width = "85%"; // JavaScript
      if (bar.classList.contains("bg-accent")) bar.style.width = "95%"; // Tailwind
      if (bar.classList.contains("bg-purple-500")) bar.style.width = "90%"; // Bootstrap
      if (bar.classList.contains("bg-orange-500")) bar.style.width = "85%"; // Figma
    }
  });
}

function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(section => {
    let rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('active');

      section.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

window.addEventListener("scroll", animateBars);


document.getElementById('year').textContent = new Date().getFullYear();


tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#7c3aed'
      }
    }
  }
}
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("opacity-0");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 800);
});
document.getElementById("year").textContent = new Date().getFullYear();


const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) el.classList.add('visible');
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});


const reveal1 = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

reveal1.forEach(el => observer.observe(el));


const progressBars = document.querySelectorAll('.progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.width;
      bar.style.transition = 'width 1.5s ease-out';
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));

const menubtn = document.getElementById("menuBtn");
const mobilemenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


const toggleDark = (btn) => {
  document.documentElement.classList.toggle("dark");
  btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
};

document.getElementById("darkToggle").addEventListener("click", function () {
  toggleDark(this);
});
document.getElementById("darkToggleMobile").addEventListener("click", function () {
  toggleDark(this);
});


const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});





