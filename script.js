
  const menuIcon = document.getElementById('menu');
  const navLinks = document.querySelector('.mobile-nav-links');
  const overlay = document.querySelector('.overlay');
  const navbar = document.querySelector('.mobile-navbar');
  const submenuButtons = document.querySelectorAll('.mobile-submenu-btn');
  const submenus = document.querySelectorAll('.mobile-submenu');
  const backButtons = document.querySelectorAll('.mobile-back-btn');

  const scrollContainer = document.querySelector('.explore-cards');


  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    submenus.forEach(menu => menu.classList.remove('active'));
  });
  overlay.addEventListener('click', () => {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  });

  submenuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const submenuId = button.getAttribute('data-mobile-submenu');
      document.getElementById(submenuId).classList.add('active');
      navLinks.classList.remove('active');
    });
  });

  backButtons.forEach(button => {
    button.addEventListener('click', () => {
      submenus.forEach(menu => menu.classList.remove('active'));
      navbar.classList.add('active');
    });
  });




  function setupScrollAuto(scrollAmount = 320) {
    const sections = document.querySelectorAll('.scroll-div');
  
    sections.forEach(section => {
      const scrollContainer = section.previousElementSibling; // Adjust to select .report-cards
      const leftBtn = section.querySelector('.scroll-btn.left');
      const rightBtn = section.querySelector('.scroll-btn.right');
  
      if (!scrollContainer || !leftBtn || !rightBtn) return;
  
      leftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        leftBtn.classList.add('active');
        rightBtn.classList.remove('active');
      });
  
      rightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        rightBtn.classList.add('active');
        leftBtn.classList.remove('active');
      });
  
      scrollContainer.addEventListener('scroll', () => {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        leftBtn.disabled = scrollContainer.scrollLeft <= 0;
        rightBtn.disabled = scrollContainer.scrollLeft >= maxScroll;
  
        leftBtn.classList.toggle('disabled', leftBtn.disabled);
        rightBtn.classList.toggle('disabled', rightBtn.disabled);
      });
    });
  }
  
  // Initialize scroll functionality for all sections
  setupScrollAuto();
  