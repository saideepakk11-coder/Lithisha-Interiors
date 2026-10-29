/**
 * Lithisha Interiors — Main Client-Side JavaScript
 * Carpentry & Custom Interior Design | Visakhapatnam, Andhra Pradesh
 * Handles: Navigation, Service Selection, Gallery Filter & Lightbox, Form Validation,
 * WhatsApp Pre-filled Inquiries, Phone Integration, and Scroll Interactions.
 */

// ==========================================================================
// 1. CONFIGURATION & CENTRALIZED IMAGE SYSTEM
// ==========================================================================

/**
 * Replaceable image system: Update paths here as actual Lithisha Interiors project
 * photographs become available. All image paths are centralized here for easy maintenance.
 */
const siteImages = {
  hero: "./assets/images/hero-interior.jpg",
  about: "./assets/images/about-carpentry.jpg",
  craftsmanship: "./assets/images/craftsmanship.jpg",
  // 14 Core Services
  customCupboards: "./assets/images/custom-cupboards.jpg",
  bedroomCupboards: "./assets/images/bedroom-cupboards.jpg",
  kitchenUnits: "./assets/images/kitchen-unit.jpg",
  crockeryUnits: "./assets/images/crockery-unit.jpg",
  shoeRacks: "./assets/images/shoe-rack.jpg",
  livingRoomCupboards: "./assets/images/living-room-cupboards.jpg",
  tvUnits: "./assets/images/tv-unit.jpg",
  childrenBedrooms: "./assets/images/children-bedroom.jpg",
  masterBedrooms: "./assets/images/master-bedroom.jpg",
  storageBoxes: "./assets/images/storage-boxes.jpg",
  dressingUnits: "./assets/images/dressing-unit.jpg",
  poojaMandirs: "./assets/images/pooja-mandir.jpg",
  wallPanels: "./assets/images/wall-panels.jpg",
  flatCupboardWorks: "./assets/images/flat-cupboard-works.jpg",
  // Gallery Inspiration Items
  gallery: [
    { src: "./assets/images/gallery-kitchen-1.jpg", category: "kitchen", title: "Modern Modular Kitchen", desc: "Custom soft-close cabinetry with quartz countertop finish" },
    { src: "./assets/images/gallery-bedroom-1.jpg", category: "bedroom", title: "Minimalist Sliding Wardrobe", desc: "Floor-to-ceiling wooden wardrobe with integrated lighting" },
    { src: "./assets/images/gallery-living-1.jpg", category: "living-room", title: "Floating TV Entertainment Unit", desc: "Acoustic wooden slat backing with hidden cable management" },
    { src: "./assets/images/gallery-storage-1.jpg", category: "storage", title: "Full-Height Storage Wall", desc: "Multi-compartment storage with customized internal organizers" },
    { src: "./assets/images/gallery-kitchen-2.jpg", category: "kitchen", title: "Walnut & Matte Cabinetry", desc: "Ergonomic pull-out drawers and corner carousel units" },
    { src: "./assets/images/gallery-bedroom-2.jpg", category: "bedroom", title: "Master Bedroom Suite", desc: "Coordinated headboard wall paneling with bedside drawer units" },
    { src: "./assets/images/gallery-living-2.jpg", category: "living-room", title: "Living Room Showcase Cabinet", desc: "Warm ambient backlit shelving with concealed bottom storage" },
    { src: "./assets/images/gallery-storage-2.jpg", category: "storage", title: "Custom Entryway Shoe Cabinet", desc: "Ventilated wooden slatted doors with seat bench" },
    { src: "./assets/images/gallery-other-1.jpg", category: "other", title: "Fluted Architectural Wall Paneling", desc: "Precision wooden cladding for residential feature walls" },
    { src: "./assets/images/gallery-other-2.jpg", category: "other", title: "Complete Flat Cupboard Works", desc: "Turnkey apartment interior woodwork installation" },
    { src: "./assets/images/gallery-kitchen-3.jpg", category: "kitchen", title: "Open Concept Kitchen & Breakfast Bar", desc: "U-shaped modular kitchen with fluted breakfast bar and recessed ceiling cove lights" },
    { src: "./assets/images/gallery-kitchen-4.jpg", category: "kitchen", title: "Rose Gloss & Fluted Glass Kitchen", desc: "L-shaped acrylic kitchen with under-cabinet profile lighting and black granite counter" },
    { src: "./assets/images/gallery-kitchen-5.jpg", category: "kitchen", title: "Contemporary Sage Green Kitchen", desc: "Seamless handleless acrylic cabinetry with glass loft display and farmhouse sink" },
    { src: "./assets/images/gallery-kitchen-6.jpg", category: "kitchen", title: "Dual-Tone Acrylic Straight Kitchen", desc: "Gloss white wall units and grey bottom drawers with integrated appliances" },
    { src: "./assets/images/gallery-kitchen-7.jpg", category: "kitchen", title: "Fluted Waterfall Island Kitchen", desc: "Architectural kitchen with waterfall breakfast counter and illuminated open showcase shelving" },
    { src: "./assets/images/gallery-kitchen-8.jpg", category: "kitchen", title: "Glass Crockery & Modular Kitchen", desc: "Extensive full-wall kitchen cabinetry with glass crockery storage and marbled tiles" },
    { src: "./assets/images/gallery-kitchen-9.jpg", category: "kitchen", title: "Curved Wooden Arch Breakfast Counter", desc: "Custom curved wood slat archway with pendant lighting and marble-finish breakfast island" },
    { src: "./assets/images/gallery-kitchen-10.jpg", category: "kitchen", title: "Curved Corner Luxury Kitchen", desc: "Full-height modular kitchen featuring illuminated curved open shelves and fluted glass lofts" },
    { src: "./assets/images/gallery-bedroom-3.jpg", category: "bedroom", title: "Sliding Wardrobe with Vanity Console", desc: "Dual-panel modern sliding wardrobe with overhead loft storage and integrated LED mirror vanity" },
    { src: "./assets/images/gallery-bedroom-4.jpg", category: "bedroom", title: "Arched Backlit Dressing Vanity", desc: "Custom asymmetric arched mirror with fluted wooden paneling and floating drawer console" },
    { src: "./assets/images/gallery-bedroom-5.jpg", category: "bedroom", title: "Luxury Bedroom Dressing Station", desc: "Semi-circular backlit mirror set against wooden fluted wall paneling and cosmetic shelving" },
    { src: "./assets/images/gallery-living-3.jpg", category: "living-room", title: "Fluted Wood Slat TV Entertainment Console", desc: "Backlit floating TV unit with vertical wooden louvers and tall glass-door display cabinet" },
    { src: "./assets/images/gallery-living-4.jpg", category: "living-room", title: "Marble Slab & Wood Slat TV Wall", desc: "Calacatta marble feature paneling paired with warm fluted wood and ambient LED cove lighting" },
    { src: "./assets/images/gallery-storage-3.jpg", category: "storage", title: "Entryway Foyer Display & Partition", desc: "Floor-to-ceiling wooden divider unit with backlit niches, open shelving, and planter base" },
    { src: "./assets/images/gallery-storage-4.jpg", category: "storage", title: "Capsule Mirror Foyer Console Unit", desc: "Full-length pill-shaped illuminated mirror flanked by fluted wall panels and floating console" },
    { src: "./assets/images/gallery-other-3.jpg", category: "other", title: "Marble Backdrop Floating Pooja Mandir", desc: "Divine prayer unit featuring marble wall cladding, floating wooden ledges, and bottom drawers" },
    { src: "./assets/images/gallery-other-4.jpg", category: "other", title: "Traditional Wooden Rafter Pooja Mandir", desc: "Ceiling-height wooden rafters with hanging lamps, backlit mandala motif, and marble altar" },
    { src: "./assets/images/gallery-other-5.jpg", category: "other", title: "Custom Archway & Living Room Partition", desc: "Authentic crafted wooden archway and display cubes dividing hallway and living areas" }
  ]
};

// Business Contact Constants
const WHATSAPP_PHONE_NUMBER = "917569888527"; // Primary WhatsApp: 7569888527
const CONTACT_PHONE_NUMBER = "9703503520";   // Direct Phone Contact: 9703503520
const BUSINESS_ADDRESS = "Akkayyapalem, 80 Feet Road, Visakhapatnam, Andhra Pradesh – 530016";

// Configurable business email (currently empty; no email provided)
const BUSINESS_EMAIL = "";

// ==========================================================================
// 2. DOM CONTENT LOADED INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initPagePreloader();
  initDynamicYear();
  initStickyHeader();
  initMobileNavigation();
  initSmoothScroll();
  initServiceQuoteSelection();
  initGalleryFiltering();
  initFooterServiceGalleryLinks();
  initGalleryLightbox();
  initQuotationForm();
  initEmailIntegration();
  initFloatingBackToTop();
  initScrollAnimations();
  initMobileTouchInteractions();
});

// Page Preloader (Smooth Minimal Architectural Reveal)
function initPagePreloader() {
  const preloader = document.getElementById("pagePreloader");
  if (!preloader) return;

  // If user prefers reduced motion, remove preloader immediately
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    preloader.style.display = "none";
    return;
  }

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 550);
  };

  // Dismiss on window complete load
  window.addEventListener("load", () => {
    setTimeout(dismiss, 200);
  });

  // Safety fallback timeout so access is never delayed
  setTimeout(dismiss, 650);
}

// Dynamic Copyright Year
function initDynamicYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ==========================================================================
// 3. STICKY HEADER & SCROLL SPY
// ==========================================================================

function initStickyHeader() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (!header) return;

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Header transparency toggle - immediately transitions to 80% island upon small scroll
    const triggerThreshold = 20;

    if (scrollPos > triggerThreshold) {
      header.classList.add("scrolled");
      header.classList.remove("transparent");
    } else {
      header.classList.remove("scrolled");
      header.classList.add("transparent");
    }

    // Nav active link indicator
    let currentSectionId = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      const linkHref = link.getAttribute("href");
      if (linkHref === `#${currentSectionId}` || 
         (currentSectionId === "contact" && (linkHref === "#contact" || linkHref === "#quote-section")) ||
         (currentSectionId === "quote-section" && (linkHref === "#contact" || linkHref === "#quote-section"))) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
}

// ==========================================================================
// 4. MOBILE NAVIGATION DRAWER
// ==========================================================================

function initMobileNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
  const mobileDrawerBack = document.getElementById("mobileDrawerBack");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");

  if (!mobileToggle || !mobileDrawer || !mobileBackdrop) return;

  const openDrawer = () => {
    mobileToggle.classList.add("active");
    mobileToggle.setAttribute("aria-expanded", "true");
    mobileDrawer.classList.add("open");
    mobileBackdrop.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeDrawer = () => {
    mobileToggle.classList.remove("active");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("open");
    mobileBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  };

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  mobileBackdrop.addEventListener("click", closeDrawer);
  if (mobileDrawerBack) mobileDrawerBack.addEventListener("click", closeDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener("click", closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Close drawer on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// ==========================================================================
// 5. UNIVERSAL SMOOTH SCROLL (Handles Contact & Section Redirection)
// ==========================================================================

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobileToggle = document.getElementById("mobileToggle");

  internalLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const hash = this.getAttribute("href");
      if (!hash || hash === "#") return;

      const targetId = hash.slice(1);
      let targetElement = document.getElementById(targetId);

      // Support aliases between contact and quote-section
      if (!targetElement && targetId === "contact") {
        targetElement = document.getElementById("quote-section");
      } else if (!targetElement && targetId === "quote-section") {
        targetElement = document.getElementById("contact");
      }

      if (targetElement) {
        e.preventDefault();

        // Close mobile drawer if currently open
        if (mobileDrawer && mobileDrawer.classList.contains("open")) {
          mobileDrawer.classList.remove("open");
          if (mobileBackdrop) mobileBackdrop.classList.remove("open");
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
          }
          document.body.style.overflow = "";
        }

        // Calculate offset position for floating island header
        const isMobile = window.innerWidth <= 991;
        const headerOffset = isMobile ? 68 : 84;
        const elementRect = targetElement.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const scrollTarget = Math.max(0, absoluteElementTop - headerOffset);

        window.scrollTo({
          top: scrollTarget,
          behavior: "smooth"
        });

        // If target is contact/quote, gently focus the full name field
        if (targetId === "contact" || targetId === "quote-section") {
          setTimeout(() => {
            const nameField = document.getElementById("full-name");
            if (nameField) nameField.focus({ preventScroll: true });
          }, 500);
        }

        // Update history URL hash cleanly without abrupt jump
        if (window.history && window.history.pushState) {
          window.history.pushState(null, "", hash);
        }
      }
    });
  });
}

// ==========================================================================
// 6. SERVICES AUTO-SELECTION & SMOOTH SCROLL TO QUOTE FORM
// ==========================================================================

function initServiceQuoteSelection() {
  const quoteButtons = document.querySelectorAll("[data-quote-service]");
  const serviceSelect = document.getElementById("service-select");
  const quoteFormSection = document.getElementById("quote-section");
  const fullNameInput = document.getElementById("full-name");

  if (!quoteButtons.length || !serviceSelect || !quoteFormSection) return;

  quoteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetService = btn.getAttribute("data-quote-service");

      if (targetService) {
        // Select matching option
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value === targetService) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }

        // Highlight effect on dropdown
        serviceSelect.classList.remove("highlight-pulse");
        void serviceSelect.offsetWidth; // Trigger reflow
        serviceSelect.classList.add("highlight-pulse");
      }

      // Smooth scroll to form section
      const headerOffset = 80;
      const elementPosition = quoteFormSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Focus name input after brief delay
      setTimeout(() => {
        if (fullNameInput) {
          fullNameInput.focus();
        }
      }, 600);
    });
  });
}

// ==========================================================================
// 7. GALLERY FILTERING (Smooth Staggered Category Switching)
// ==========================================================================

function filterGallery(filterValue) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterButtons.length || !galleryItems.length) return;

  // Update active filter button state
  filterButtons.forEach((b) => {
    if (b.getAttribute("data-filter") === filterValue) {
      b.classList.add("active");
      try {
        b.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      } catch (err) {}
    } else {
      b.classList.remove("active");
    }
  });

  // Smooth staggered reveal animation for matching items
  let matchIndex = 0;
  galleryItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (filterValue === "all" || itemCategory === filterValue) {
      item.classList.remove("hidden");
      item.style.opacity = "0";
      item.style.transform = "translateY(22px) scale(0.96)";

      const delay = Math.min(matchIndex * 50 + 20, 360);
      setTimeout(() => {
        item.style.transition = "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)";
        item.style.opacity = "1";
        item.style.transform = "translateY(0) scale(1)";
      }, delay);

      matchIndex++;
    } else {
      item.classList.add("hidden");
      item.style.opacity = "0";
      item.style.transform = "scale(0.95)";
    }
  });
}

function initGalleryFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (!filterButtons.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter");
      filterGallery(filterValue);
    });
  });
}

// ==========================================================================
// 8. FOOTER SERVICES DIRECT GALLERY REDIRECTION (e.g. Kitchen Units -> Kitchen Images)
// ==========================================================================

function initFooterServiceGalleryLinks() {
  const footerLinks = document.querySelectorAll("[data-gallery-filter]");
  const gallerySection = document.getElementById("gallery");

  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filterCategory = link.getAttribute("data-gallery-filter");

      if (gallerySection) {
        // Close mobile drawer if currently open
        const mobileDrawer = document.getElementById("mobileDrawer");
        const mobileBackdrop = document.getElementById("mobileBackdrop");
        const mobileToggle = document.getElementById("mobileToggle");
        if (mobileDrawer && mobileDrawer.classList.contains("open")) {
          mobileDrawer.classList.remove("open");
          if (mobileBackdrop) mobileBackdrop.classList.remove("open");
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
            mobileToggle.setAttribute("aria-expanded", "false");
          }
          document.body.style.overflow = "";
        }

        const isMobile = window.innerWidth <= 991;
        const headerOffset = isMobile ? 68 : 84;
        const galleryRect = gallerySection.getBoundingClientRect();
        const galleryTop = galleryRect.top + window.pageYOffset;

        window.scrollTo({
          top: Math.max(0, galleryTop - headerOffset),
          behavior: "smooth"
        });

        // Filter gallery to matching category (e.g. 'kitchen')
        if (filterCategory) {
          setTimeout(() => {
            filterGallery(filterCategory);

            // Highlight all matching gallery cards with a subtle luxury pulse
            const matchingItems = document.querySelectorAll(`.gallery-item[data-category="${filterCategory}"]`);
            matchingItems.forEach((item) => {
              item.classList.remove("highlight-card-pulse");
              void item.offsetWidth; // Force DOM reflow
              item.classList.add("highlight-card-pulse");
            });
          }, 400);
        }

        // Update URL hash without abrupt jumps
        if (window.history && window.history.pushState) {
          window.history.pushState(null, "", `#gallery-${filterCategory}`);
        }
      }
    });
  });
}

// ==========================================================================
// 7. GALLERY LIGHTBOX MODAL
// ==========================================================================

function initGalleryLightbox() {
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!lightboxModal || !lightboxImage || !lightboxClose) return;

  let lastActiveElement = null;

  const openLightbox = (item) => {
    lastActiveElement = document.activeElement;
    const img = item.querySelector("img");
    const title = item.querySelector(".gallery-title");
    const desc = item.querySelector(".gallery-desc");

    if (img) {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || "Interior Design Concept";
    }
    if (title && lightboxTitle) {
      lightboxTitle.textContent = title.textContent;
    }
    if (desc && lightboxCaption) {
      lightboxCaption.textContent = desc.textContent;
    }

    lightboxModal.classList.add("open");
    lightboxModal.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove("open");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => openLightbox(item));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);

  // Close when clicking backdrop outside content
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  // Keyboard navigation inside Lightbox
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal.classList.contains("open")) {
      closeLightbox();
    }
  });
}

// ==========================================================================
// 8. QUOTATION FORM VALIDATION & WHATSAPP INTEGRATION
// ==========================================================================

function initQuotationForm() {
  const quoteForm = document.getElementById("quoteForm");
  if (!quoteForm) return;

  const fullNameInput = document.getElementById("full-name");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");
  const serviceSelect = document.getElementById("service-select");
  const locationSelect = document.getElementById("location-select");
  const projectDescInput = document.getElementById("project-desc");
  const formStatusAlert = document.getElementById("formStatusAlert");

  // Regex patterns
  // Indian phone number: 10 digits starting with 6, 7, 8, or 9
  const indianPhoneRegex = /^[6-9]\d{9}$/;
  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time error removal
  const clearError = (input, errorId) => {
    input.classList.remove("is-invalid");
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.classList.remove("visible");
  };

  const showError = (input, errorId, message) => {
    input.classList.add("is-invalid");
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
      if (message) errorEl.textContent = message;
      errorEl.classList.add("visible");
    }
  };

  // Bind input listeners
  fullNameInput.addEventListener("input", () => clearError(fullNameInput, "error-name"));
  phoneInput.addEventListener("input", () => clearError(phoneInput, "error-phone"));
  if (emailInput) emailInput.addEventListener("input", () => clearError(emailInput, "error-email"));
  serviceSelect.addEventListener("change", () => clearError(serviceSelect, "error-service"));
  locationSelect.addEventListener("change", () => clearError(locationSelect, "error-location"));
  projectDescInput.addEventListener("input", () => clearError(projectDescInput, "error-desc"));

  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Full Name
    const nameVal = fullNameInput.value.trim();
    if (nameVal.length < 2) {
      showError(fullNameInput, "error-name", "Please enter your full name (minimum 2 characters).");
      isValid = false;
    }

    // Validate Phone Number
    // Clean spaces, hyphens, and leading +91 or 0
    let cleanPhone = phoneInput.value.replace(/[\s\-\(\)]/g, "");
    if (cleanPhone.startsWith("+91")) cleanPhone = cleanPhone.slice(3);
    else if (cleanPhone.startsWith("91") && cleanPhone.length === 12) cleanPhone = cleanPhone.slice(2);
    else if (cleanPhone.startsWith("0") && cleanPhone.length === 11) cleanPhone = cleanPhone.slice(1);

    if (!indianPhoneRegex.test(cleanPhone)) {
      showError(phoneInput, "error-phone", "Please enter a valid 10-digit Indian mobile number.");
      isValid = false;
    }

    // Validate Email (optional)
    const emailVal = emailInput ? emailInput.value.trim() : "";
    if (emailVal !== "" && !emailRegex.test(emailVal)) {
      showError(emailInput, "error-email", "Please enter a valid email address or leave it blank.");
      isValid = false;
    }

    // Validate Service
    const serviceVal = serviceSelect.value;
    if (!serviceVal) {
      showError(serviceSelect, "error-service", "Please select the service required.");
      isValid = false;
    }

    // Validate Location
    const locationVal = locationSelect.value;
    if (!locationVal) {
      showError(locationSelect, "error-location", "Please select your preferred service location.");
      isValid = false;
    }

    // Project Description (Optional)
    const descVal = projectDescInput ? projectDescInput.value.trim() : "";

    // Preferred contact method
    const contactMethodInput = document.querySelector('input[name="contact_method"]:checked');
    const contactMethod = contactMethodInput ? contactMethodInput.value : "WhatsApp";

    if (!isValid) {
      // Scroll to first invalid field
      const firstInvalid = quoteForm.querySelector(".is-invalid");
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // Selected service readable name
    const serviceTitle = serviceSelect.options[serviceSelect.selectedIndex].text;

    // Generate WhatsApp Pre-filled message
    let whatsappText = `Hello Lithisha Interiors, I would like to request a quotation.\n\n` +
      `*Name:* ${nameVal}\n` +
      `*Phone:* ${cleanPhone}\n`;

    if (emailVal) {
      whatsappText += `*Email:* ${emailVal}\n`;
    }

    whatsappText += `*Service:* ${serviceTitle}\n` +
      `*Location:* ${locationVal}\n` +
      `*Preferred Contact Method:* ${contactMethod}\n`;

    if (descVal) {
      whatsappText += `*Project Details:* ${descVal}\n\n`;
    } else {
      whatsappText += `\n`;
    }

    whatsappText += `Please contact me to discuss my requirements.`;

    const encodedMessage = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

    // Display helpful status banner
    if (formStatusAlert) {
      formStatusAlert.className = "form-status-alert success";
      formStatusAlert.innerHTML = `<strong>Connecting to WhatsApp...</strong> Your inquiry details have been formatted. Opening WhatsApp in a new tab so you can review and tap Send to contact Lithisha Interiors directly.`;
    }

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
  });
}

// ==========================================================================
// 9. CONFIGURABLE EMAIL INTEGRATION
// ==========================================================================

function initEmailIntegration() {
  const emailBox = document.getElementById("emailActionBox");
  if (!emailBox) return;

  // Only display if BUSINESS_EMAIL is non-empty and valid
  if (BUSINESS_EMAIL && BUSINESS_EMAIL.trim() !== "") {
    emailBox.style.display = "block";
    const emailLink = document.getElementById("businessEmailLink");
    if (emailLink) {
      emailLink.href = `mailto:${BUSINESS_EMAIL}?subject=Interior%20Design%20Quotation%20Inquiry%20-%20Lithisha%20Interiors`;
      emailLink.textContent = BUSINESS_EMAIL;
    }
  } else {
    // Keep hidden if no verified email exists
    emailBox.style.display = "none";
  }
}

// ==========================================================================
// 10. FLOATING BACK TO TOP & ACTIONS
// ==========================================================================

function initFloatingBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ==========================================================================
// 11. INTERSECTION OBSERVER SCROLL REVEALS
// ==========================================================================

function initScrollAnimations() {
  const animatedTargets = document.querySelectorAll(
    ".reveal, .service-card, .why-card, .process-card, .gallery-item, .area-item, .location-card, .footer-call-card, .about-highlight-card, .about-visual, .why-visual, .hero-ethos-item, .about-badge"
  );
  if (!animatedTargets.length) return;

  // If user prefers reduced motion, skip scroll reveal animations
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animatedTargets.forEach((el) => el.classList.add("active"));
    return;
  }

  const isMobile = window.innerWidth <= 768;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: isMobile ? "0px 0px -15px 0px" : "0px 0px -35px 0px"
    }
  );

  animatedTargets.forEach((el) => {
    if (!el.classList.contains("reveal")) {
      el.classList.add("reveal");
    }
    observer.observe(el);
  });
}

// ==========================================================================
// 12. COMPREHENSIVE MOBILE TOUCH & ACTIVE HOVER INTERACTIONS
// ==========================================================================

function initMobileTouchInteractions() {
  const touchTargets = document.querySelectorAll(
    ".service-card, .why-card, .process-card, .gallery-item, .filter-btn, .area-item, .location-card, .btn, .service-quote-btn, .service-gallery-link, .footer-phone-btn, .footer-service-link, .about-highlight-card, .about-badge, .hero-ethos-item, .hero-contact-link, .radio-pill label, .floating-btn, .mobile-drawer-back-btn, .mobile-drawer-close-btn, .mobile-nav-links a"
  );

  touchTargets.forEach((target) => {
    target.addEventListener("touchstart", function () {
      this.classList.add("touch-hover");
    }, { passive: true });

    target.addEventListener("touchend", function () {
      setTimeout(() => {
        this.classList.remove("touch-hover");
      }, 280);
    }, { passive: true });

    target.addEventListener("touchcancel", function () {
      this.classList.remove("touch-hover");
    }, { passive: true });
  });
}
