// Initial animation for the slider

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add('(min-width: 481px)', () => {
  // Enable animation for screens larger than 480px
  const totalSlides = document.querySelectorAll('.slide').length;
  const totalWidth = totalSlides * 33.33;
  const scrollLength = totalWidth - 100;

  gsap.to('.slider-wrapper', {
    x: `-${scrollLength}%`,
    ease: 'none',
    scrollTrigger: {
      trigger: '.project-slider',
      start: 'top 30%',
      end: '+=2000',
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
    },
  });
});

gsap.to('.lName', {
  scrollTrigger: {
    trigger: '.hero-wrapper',
    start: 'top top',
    scrub: 1.9,
  },
  yPercent: -10,
});

gsap.to('.fName', {
  delay: 0.5,
  scrollTrigger: {
    trigger: '.hero-wrapper',
    start: 'top top',
    scrub: 1.9,
  },
  yPercent: -10,
});

gsap.to('#desc', {
  scrollTrigger: {
    trigger: '.short-desc',
    start: 'top 30%',
    scrub: 1.9,
  },
  yPercent: 50,
});

gsap.from('#about', {
  x: -300,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    scrub: 3,
    trigger: '.about-wrapper',
    scroller: 'body',
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to('#about', {
  yPercent: -70,
  scrollTrigger: {
    trigger: '.about-wrapper',
    start: 'top 30%',
    scrub: 3,
  },
});

gsap.from('.me-box-card img', {
  xPercent: 200,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    scrub: 3,
    trigger: '.me-box-card',
    scroller: 'body',
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to('img', {
  yPercent: -30,
  x: -100,
  scrollTrigger: {
    trigger: '.me-box-card',
    start: 'bottom 80%',
    scrub: 3,
  },
});

gsap.from('.me-box #me-box-para', {
  xPercent: -200,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    scrub: 3,
    trigger: '.me-box',
    scroller: 'body',
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to('#me-box-para', {
  yPercent: -70,
  x: -100,
  scrollTrigger: {
    trigger: '.me-box-card',
    start: 'bottom 80%',
    scrub: 3,
  },
});

gsap.from('.contact-col #contact-h1', {
  x: -300,
  delay: 1,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    scrub: 3,
    trigger: '.contact-col',
    scroller: 'body',
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to('#contact-h1', {
  yPercent: -40,
  scrollTrigger: {
    trigger: '.contact-col',
    start: 'bottom 80%',
    scrub: 3,
  },
});

gsap.from('.contact-col #contact-p', {
  xPercent: -300,
  delay: 2,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-col',
    scroller: 'body',
    scrub: 3,
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to('#contact-p', {
  yPercent: -40,
  scrollTrigger: {
    trigger: '.contact-col',
    start: 'bottom 80%',
    scrub: 3,
  },
});

gsap.from('.contact-col .message-btn', {
  xPercent: -200,
  delay: 3,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-col',
    scroller: 'body',
    scrub: 4,
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to('#contact-p', {
  yPercent: -40,
  scrollTrigger: {
    trigger: '.contact-col',
    start: 'bottom 80%',
    scrub: 3,
  },
});

gsap.from('.contact-col #contact-h3', {
  xPercent: 200,
  delay: 3,
  duration: 1,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-col',
    scroller: 'body',
    scrub: 4,
    start: 'top 100%',
    end: 'bottom 80%',
  },
});

gsap.to(' #contact-h3', {
  yPercent: -40,
  scrollTrigger: {
    trigger: '.contact-col',
    start: 'bottom 80%',
    scrub: 3,
  },
});
