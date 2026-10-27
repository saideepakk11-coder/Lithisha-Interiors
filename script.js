/**
 * SLR INTERIORS — Main Client-Side JavaScript
 * Carpentry & Custom Interior Design | Visakhapatnam, Andhra Pradesh
 * Handles: Navigation, Service Selection, Gallery Filter & Lightbox, Form Validation,
 * WhatsApp Pre-filled Inquiries, Phone Integration, and Scroll Interactions.
 */

// ==========================================================================
// 1. CONFIGURATION & CENTRALIZED IMAGE SYSTEM
// ==========================================================================

/**
 * Replaceable image system: Update paths here as actual SLR INTERIORS project
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
    { src: "./assets/images/gallery-other-2.jpg", category: "other", title: "Complete Flat Cupboard Works", desc: "Turnkey apartment interior woodwork installation" }
  ]
};

// Business Contact Constants
const WHATSAPP_PHONE_NUMBER = "917569888527"; // Primary WhatsApp (India format: 91 + 10 digits)
const PRIMARY_PHONE_DISPLAY = "7569888527";
const SECONDARY_PHONE_DISPLAY = "9703503520";
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
  initServiceQuoteSelection();
  initGalleryFiltering();
  initGalleryLightbox();
  initQuotationForm();
  initEmailIntegration();
  initFloatingBackToTop();
  initScrollAnimations();
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

    // Header transparency toggle
    if (scrollPos > 60) {
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
      if (link.getAttribute("href") === `#${currentSectionId}`) {
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
// 5. SERVICES AUTO-SELECTION & SMOOTH SCROLL TO QUOTE FORM
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
// 6. GALLERY FILTERING
// ==========================================================================

function initGalleryFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active filter button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (filterValue === "all" || itemCategory === filterValue) {
          item.classList.remove("hidden");
          item.style.opacity = "0";
          item.style.transform = "scale(0.96)";
          setTimeout(() => {
            item.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 20);
        } else {
          item.classList.add("hidden");
        }
      });
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

    // Validate Project Description
    const descVal = projectDescInput.value.trim();
    if (descVal.length < 5) {
      showError(projectDescInput, "error-desc", "Please provide a brief description of your project (e.g., room size, preferred wood finish, timeline).");
      isValid = false;
    }

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
    let whatsappText = `Hello SLR INTERIORS, I would like to request a quotation.\n\n` +
      `*Name:* ${nameVal}\n` +
      `*Phone:* ${cleanPhone}\n`;

    if (emailVal) {
      whatsappText += `*Email:* ${emailVal}\n`;
    }

    whatsappText += `*Service:* ${serviceTitle}\n` +
      `*Location:* ${locationVal}\n` +
      `*Preferred Contact Method:* ${contactMethod}\n` +
      `*Project Details:* ${descVal}\n\n` +
      `Please contact me to discuss my requirements.`;

    const encodedMessage = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

    // Display helpful status banner
    if (formStatusAlert) {
      formStatusAlert.className = "form-status-alert success";
      formStatusAlert.innerHTML = `<strong>Connecting to WhatsApp...</strong> Your inquiry details have been formatted. Opening WhatsApp in a new tab so you can review and tap Send to contact SLR INTERIORS directly.`;
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
      emailLink.href = `mailto:${BUSINESS_EMAIL}?subject=Interior%20Design%20Quotation%20Inquiry%20-%20SLR%20INTERIORS`;
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
  // If user prefers reduced motion, skip scroll reveal animations
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("active"));
    return;
  }

  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
