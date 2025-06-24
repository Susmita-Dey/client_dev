document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileNav.classList.toggle("active");
    body.style.overflow = mobileNav.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close mobile menu when clicking on a link (but not dropdown toggles)
  const mobileLinks = mobileNav.querySelectorAll(
    "a:not(#mobile-solutions-btn)"
  );
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !hamburger.contains(event.target) &&
      !mobileNav.contains(event.target)
    ) {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
      body.style.overflow = "";
    }
  });

  // --- Desktop Dropdown Logic ---
  var dropdownBtn = document.getElementById("solutions-btn");
  var dropdownMenu = dropdownBtn && dropdownBtn.nextElementSibling;

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownMenu.classList.toggle("show");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }

  // --- Mobile Dropdown Logic ---
  const mobileDropdownBtn = document.getElementById("mobile-solutions-btn");
  const mobileDropdownMenu =
    mobileDropdownBtn && mobileDropdownBtn.nextElementSibling;

  if (mobileDropdownBtn && mobileDropdownMenu) {
    mobileDropdownBtn.addEventListener("click", function (e) {
      // Only work if hamburger menu is active
      if (!hamburger.classList.contains("active")) return;

      e.preventDefault();
      e.stopPropagation();

      // Toggle the dropdown menu
      mobileDropdownMenu.classList.toggle("active");
      this.classList.toggle("active");
    });

    // Close mobile dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !mobileDropdownBtn.contains(e.target) &&
        !mobileDropdownMenu.contains(e.target)
      ) {
        mobileDropdownMenu.classList.remove("active");
        mobileDropdownBtn.classList.remove("active");
      }
    });
  }

  // --- Client Logo Carousel Logic ---
  const clientLogoFolders = [
    "assets/HTML Photos/home-images/Client logo/Education",
    "assets/HTML Photos/home-images/Client logo/Enterprise",
    "assets/HTML Photos/home-images/Client logo/Hospitals",
    "assets/HTML Photos/home-images/Client logo/Hotel",
    "assets/HTML Photos/home-images/Client logo/ISP",
    "assets/HTML Photos/home-images/Client logo/Public wifi",
    // Add more folders as needed
  ];

  const clientLogoImages = [
    [
      "image 2312.png",
      "image 2313.png",
      "image 2314.png",
      "image 2315.png",
      "image 2316.png",
      "image 2317.png",
    ], // folder1
    [
      "image 2323.png",
      "image 2324.png",
      "image 2325.png",
      "image 2326.png",
      "image 2327.png",
    ], // folder2
    [
      "image 2318.png",
      "image 2319.png",
      "image 2320.png",
      "image 2321.png",
      "image 2322.png",
    ],
    [
      "image 2304.png",
      "image 2305.png",
      "image 2306.png",
      "image 2307.png",
      "image 2308.png",
      "image 2309.png",
    ],
    [
      "image 2296.png",
      "image 2297.png",
      "image 2298.png",
      "image 2299.png",
      "image 2301.png",
      "image 2303.png",
    ],
    ["image 2310.png", "image 2311.png"],
    // Add more arrays as needed
  ];

  const logoFiles = [];
  clientLogoFolders.forEach((folder, idx) => {
    clientLogoImages[idx].forEach((filename) => {
      logoFiles.push(`${folder}/${filename}`);
    });
  });

  const carousel = document.getElementById("client-carousel");
  
  function setupSmoothCarousel(carouselElement, logoFiles, visibleCount = 4) {
    if (!carouselElement) return;
    
    // Clear existing content
    carouselElement.innerHTML = "";
    
    // Create a container for smooth scrolling
    const scrollContainer = document.createElement("div");
    scrollContainer.style.cssText = `
      display: flex;
      gap: 20px;
      animation: scroll 40s linear infinite;
      width: max-content;
    `;
    
    // Add logos twice for seamless loop
    for (let i = 0; i < 2; i++) {
      logoFiles.forEach((logoPath) => {
        const img = document.createElement("img");
        img.src = logoPath;
        img.alt = "Client Logo";
        img.style.cssText = `
          width: 120px;
          height: 60px;
          object-fit: contain;
          flex-shrink: 0;
        `;
        scrollContainer.appendChild(img);
      });
    }
    
    carouselElement.appendChild(scrollContainer);
    
    // Add CSS animation
    if (!document.querySelector('#carousel-animations')) {
      const style = document.createElement('style');
      style.id = 'carousel-animations';
      style.textContent = `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .client-carousel, .third-party-carousel {
          overflow: hidden;
          position: relative;
        }
        
        .client-carousel:hover .scroll-container,
        .third-party-carousel:hover .scroll-container {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
    }
    
    scrollContainer.classList.add('scroll-container');
  }

  // Setup client carousel
  setupSmoothCarousel(carousel, logoFiles, 4);

  // --- 3rd Party Logo Carousel Logic ---
  const thirdPartyLogoFolder =
    "assets/HTML Photos/home-images/3rd party logo/compresspng (1)/";

  const thirdPartyLogoImages = [
    "Frame 48096573.png",
    "Frame 48096574.png",
    "Frame 48096575.png",
    "Frame 48096576.png",
    "Frame 48096577-min.png",
    "Frame 48096578-min.png",
    "Frame 48096579.png",
    "Frame 48096581-min.png",
    "Frame 48096582-min.png",
    "Frame 48096583.png",
    "Frame 48096584.png",
    "Frame 48096585-min.png",
    "Frame 48096586-min.png",
    "Frame 48096587.png",
    "Frame 48096588-min.png",
    "Frame 48096589-min.png",
    "Frame 48096590.png",
    "Frame 48096592-min.png",
    "Frame 48096593.png",
    "Frame 48096594-min.png",
    "Frame 48096594.png",
    "Frame 48096595.png",
    // Add all your 3rd party logo filenames here
  ];

  const thirdPartyLogoFiles = thirdPartyLogoImages.map(
    (filename) => `${thirdPartyLogoFolder}${filename}`
  );

  const thirdPartyCarousel = document.getElementById("third-party-carousel");
  
  // Setup 3rd party carousel
  setupSmoothCarousel(thirdPartyCarousel, thirdPartyLogoFiles, 6);

  // --- Accordion Logic ---
  document.querySelectorAll(".benefit-accordion-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const panel = btn.nextElementSibling;
      const isActive = btn.classList.contains("active");
      // Close all
      document
        .querySelectorAll(".benefit-accordion-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".benefit-accordion-panel")
        .forEach((p) => (p.style.display = "none"));
      // Open if not already open
      if (!isActive) {
        btn.classList.add("active");
        panel.style.display = "block";
      }
    });
  });

  // --- Telcos Accordion Logic ---
  document
    .querySelectorAll(".problems-accordion .accordion-header")
    .forEach((header) => {
      header.addEventListener("click", function () {
        const item = this.parentElement;
        const isActive = item.classList.contains("active");
        // Close all
        document
          .querySelectorAll(".problems-accordion .accordion-item")
          .forEach((i) => {
            i.classList.remove("active");
            i.querySelector(".accordion-header").classList.remove("active");
            i.querySelector(".accordion-toggle").textContent = "+";
            if (i.querySelector(".accordion-body"))
              i.querySelector(".accordion-body").style.display = "none";
          });
        // Open if not already active
        if (!isActive) {
          item.classList.add("active");
          this.classList.add("active");
          this.querySelector(".accordion-toggle").textContent = "−";
          if (item.querySelector(".accordion-body"))
            item.querySelector(".accordion-body").style.display = "block";
        }
      });
    });

  // --- Testimonial slider logic for 2 cards visible, 3 slides as described ---
  const cardsContainer = document.querySelector(".testimonial-cards");
  const cards = cardsContainer
    ? cardsContainer.querySelectorAll(".testimonial-card")
    : [];
  const dots = document.querySelectorAll(".testimonial-dot-btn");
  let currentSlide = 0;

  // Clone the first card and append it to the end for wrap-around effect
  if (
    cardsContainer &&
    cards.length > 0 &&
    !cardsContainer.querySelector(".testimonial-card.clone")
  ) {
    const firstClone = cards[0].cloneNode(true);
    firstClone.classList.add("clone");
    cardsContainer.appendChild(firstClone);
  }

  function showSlide(idx) {
    currentSlide = idx;
    if (!cards[0] || !cardsContainer) return;
    const cardStyle = getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth;
    const gap = parseInt(cardStyle.marginRight || 0) || 24;

    // For the last slide, move to the last card (which is the clone of the first)
    if (idx === 2) {
      cardsContainer.style.transform = `translateX(-${
        (cardWidth + gap) * 2
      }px)`;
    } else {
      cardsContainer.style.transform = `translateX(-${
        idx * (cardWidth + gap)
      }px)`;
    }
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === idx);
    });
  }

  if (cards.length && cardsContainer && dots.length) {
    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => showSlide(idx));
    });

    // Initialize
    showSlide(0);
  }

  // FAQ dropdown logic
  const faqDropdowns = document.querySelectorAll(".faq-dropdown");
  faqDropdowns.forEach((drop) => {
    drop.querySelector(".faq-question").addEventListener("click", function () {
      console.log("FAQ clicked");
      const isActive = drop.classList.contains("active");
      faqDropdowns.forEach((d) => d.classList.remove("active"));
      if (!isActive) {
        drop.classList.add("active");
      }
    });
  });

  const tabs = document.querySelectorAll(".tab-link");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.tab);

      // Remove active class from all tabs and panes
      tabs.forEach((t) => t.classList.remove("active"));
      panes.forEach((p) => p.classList.remove("active"));

      // Add active class to clicked tab and its corresponding pane
      tab.classList.add("active");
      target.classList.add("active");
    });
  });
});
