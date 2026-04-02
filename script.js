// ===========================
//   PHOTO SLIDER
// ===========================

const imgs = document.querySelectorAll('#photoBox img');
const dots = document.querySelectorAll('.ph-dot');
let current = 0;
let autoTimer;

function goToSlide(n) {
  imgs[current].classList.remove('active');
  dots[current].classList.remove('on');
  current = (n + imgs.length) % imgs.length;
  imgs[current].classList.add('active');
  dots[current].classList.add('on');
}

function nextSlide() {
  goToSlide(current + 1);
}

function prevSlide() {
  goToSlide(current - 1);
}

// Arrow buttons
document.getElementById('prevBtn').addEventListener('click', () => {
  clearInterval(autoTimer);
  prevSlide();
  startAuto();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  clearInterval(autoTimer);
  nextSlide();
  startAuto();
});

// Dot buttons
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoTimer);
    goToSlide(index);
    startAuto();
  });
});

// Auto slide every 4 seconds
function startAuto() {
  autoTimer = setInterval(nextSlide, 4000);
}

startAuto();


// ===========================
//   HAMBURGER MENU
// ===========================

const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '60px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = '#fff';
  navLinks.style.padding = '1rem 2rem';
  navLinks.style.borderBottom = '1px solid #e8e4dc';
  navLinks.style.zIndex = '998';
});

//   hamburger.addEventListener('click', () => {
//     if(hamburger){
//   const isOpen = navLinks.style.display === 'flex';
//   navLinks.style.display = isOpen ? 'none' : 'flex';
//   navLinks.style.flexDirection = 'column';
//   navLinks.style.position = 'absolute';
//   navLinks.style.top = '60px';
//   navLinks.style.left = '0';
//   navLinks.style.right = '0';
//   navLinks.style.background = '#fff';
//   navLinks.style.padding = '1rem 2rem';
//   navLinks.style.borderBottom = '1px solid #e8e4dc';
//   navLinks.style.zIndex = '998';
//   }{
//   hamburger == ""
// }

// });
  

// ===========================
//   CONTACT FORM
// ===========================

document.querySelector('.send-btn').addEventListener('click', () => {
  const name    = document.querySelector('input[placeholder="Name"]').value.trim();
  const email   = document.querySelector('input[placeholder="Email"]').value.trim();
  const subject = document.querySelector('input[placeholder="Subject"]').value.trim();
  const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in Name, Email and Message.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Message sent successfully! We will get back to you soon.');

  document.querySelector('input[placeholder="Name"]').value    = '';
  document.querySelector('input[placeholder="Email"]').value   = '';
  document.querySelector('input[placeholder="Subject"]').value = '';
  document.querySelector('textarea[placeholder="Message"]').value = '';
});
