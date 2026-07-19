// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;

    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Dark / Light Mode
// ===============================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;

darkBtn.className = "btn btn-primary position-fixed";

darkBtn.style.right = "20px";

darkBtn.style.bottom = "20px";

darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    darkBtn.innerHTML = `<i class="bi bi-sun-fill"></i>`;
  } else {
    darkBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
  }
});

// ===============================
// Typing Effect
// ===============================

const text = "Angular Frontend Developer";

let index = 0;

const heroTitle = document.querySelector(".hero h2");

function typing() {
  if (index < text.length) {
    heroTitle.innerHTML += text.charAt(index);

    index++;

    setTimeout(typing, 100);
  }
}

heroTitle.innerHTML = "";

typing();

// ===============================
// Close Mobile Navbar After Click
// ===============================

const navItems = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});

// ===============================
// Current Year Footer
// ===============================

const footerYear = document.querySelector("footer p");

if (footerYear) {
  footerYear.innerHTML = `
© ${new Date().getFullYear()} Mahmoud Otefy | Angular Frontend Developer
`;
}
