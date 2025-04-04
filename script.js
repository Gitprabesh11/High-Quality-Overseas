// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Animate menu toggle
      const spans = menuToggle.querySelectorAll('span');
      menuToggle.classList.toggle('active');
      
      if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  // Shrink header on scroll
  const headerMain = document.querySelector('.header-main');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class based on scroll position
    if (scrollTop > 50) {
      headerMain.classList.add('scrolled');
    } else {
      headerMain.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Implement Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  const subscriptionMessage = document.getElementById('subscription-message');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Simulate form submission (in a real app, this would be an API call)
        subscriptionMessage.textContent = 'Thank you for subscribing!';
        subscriptionMessage.style.color = 'white';
        emailInput.value = '';
        
        // Add success animation
        subscriptionMessage.classList.add('animate-success');
        setTimeout(() => {
          subscriptionMessage.classList.remove('animate-success');
        }, 3000);
      } else {
        subscriptionMessage.textContent = 'Please enter a valid email address.';
        subscriptionMessage.style.color = '#FFD700';
      }
    });
  }
  
  // Add animation to footer links
  const footerLinks = document.querySelectorAll('.footer-link');
  
  footerLinks.forEach((link, index) => {
    link.style.transitionDelay = `${0.05 * index}s`;
    
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
  
  // Logo animation on hover
  const logo = document.querySelector('.logo');
  
  if (logo) {
    logo.addEventListener('mouseover', function() {
      this.classList.add('logo-animation');
    });
    
    logo.addEventListener('mouseout', function() {
      this.classList.remove('logo-animation');
    });
  }
  
  // Add CSS variables for social links animation delays
  const socialLinksTop = document.querySelectorAll('.social-links-top a');
  socialLinksTop.forEach((link, index) => {
    link.style.setProperty('--i', index + 1);
  });
  
  // Animate contact info on load
  const contactInfoItems = document.querySelectorAll('.contact-info p');
  contactInfoItems.forEach((item, index) => {
    item.style.transitionDelay = `${0.1 * index}s`;
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 500);
  });
  
  // Animate footer headings
  const footerHeadings = document.querySelectorAll('.footer-column h4, .contact-details h3, .newsletter h3');
  footerHeadings.forEach((heading, index) => {
    heading.style.transitionDelay = `${0.1 * index}s`;
    setTimeout(() => {
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
    }, 700);
  });
  
  // Add wave effect to subscription button
  const subscribeBtn = document.querySelector('.newsletter button');
  
  if (subscribeBtn) {
    subscribeBtn.addEventListener('mouseover', function() {
      this.classList.add('btn-wave');
    });
    
    subscribeBtn.addEventListener('mouseout', function() {
      this.classList.remove('btn-wave');
    });
  }
  
  // Add particle effect to top header (simplified version)
  const headerTop = document.querySelector('.header-top');
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position, size and animation duration
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * 50;
    const duration = Math.random() * 10 + 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animationDuration = `${duration}s`;
    
    headerTop.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      headerTop.removeChild(particle);
    }, duration * 1000);
  }
  
  // Create particles at intervals
  setInterval(createParticle, 1000);
}); 