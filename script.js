/* ========================================
   SIA MODA EVI - Main JavaScript
   ======================================== */

// ---- Language System (Functions now in translations.js) ----

function setCurrentLang(lang) {
  localStorage.setItem('sia-lang', lang);
}

function applyTranslations() {
  const lang = getCurrentLang();
  const langNames = { tr: 'TR', en: 'EN', de: 'DE', ar: 'AR' };

  // Update lang button text
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langNames[lang]} <i class="fas fa-chevron-down" style="font-size:0.5rem"></i>`;
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) {
      el.innerHTML = val;
    }
  });

  // Update all placeholders with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) {
      el.placeholder = val;
    }
  });

  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }
}


document.addEventListener('DOMContentLoaded', () => {

  // ---- Apply translations on load ----
  applyTranslations();

  // ---- Mobile Menu Toggle ----
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // ---- Search Toggle ----
  const searchBox = document.getElementById('search-box');
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  if (searchBtn && searchBox) {
    searchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('active');
      if (searchBox.classList.contains('active')) {
        searchInput.focus();
      }
    });

    // Close search on outside click
    document.addEventListener('click', (e) => {
      if (!searchBox.contains(e.target)) {
        searchBox.classList.remove('active');
      }
    });

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const query = searchInput.value.trim().toLowerCase();
          if (query) {
            performSearch(query);
          }
        }
      });
    }
  }

  function performSearch(query) {
    const pages = [
      { name: 'Gelinlikler', url: 'gelinlikler.html', keywords: ['gelinlik', 'wedding', 'düğün', 'gelin', 'brautkleid', 'زفاف'] },
      { name: 'K\u0131nal\u0131klar', url: 'kinalik.html', keywords: ['K\u0131nal\u0131k', 'nişan', 'engagement', 'verlobung', 'خطوبة'] },
      { name: 'Aksesuarlar', url: 'aksesuarlar.html', keywords: ['aksesuar', 'tac', 'duvak', 'ayakkabı', 'accessory', 'إكسسوار'] },
      { name: 'Koleksiyonlar', url: 'koleksiyonlar.html', keywords: ['koleksiyon', 'collection', 'kollektion', 'مجموعة'] },
      { name: 'Mağaza', url: 'magaza-bulucu.html', keywords: ['mağaza', 'store', 'adres', 'geschäft', 'متجر'] },
      { name: 'Hakkımızda', url: 'hakkimizda.html', keywords: ['hakkımızda', 'about', 'şirket', 'über', 'من نحن'] },
    ];

    for (const page of pages) {
      if (page.keywords.some(kw => query.includes(kw) || kw.includes(query))) {
        window.location.href = page.url;
        return;
      }
    }

    // Default: go to gelinlikler
    window.location.href = 'gelinlikler.html';
  }

  // ---- Language Selector ----
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langBtn && langDropdown) {
    const langLinks = langDropdown.querySelectorAll('a');
    langLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        setCurrentLang(lang);
        applyTranslations();
        langDropdown.classList.remove('active');
      });
    });
  }

  // ---- Scroll Animations ----
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ---- Header Scroll Effect ----
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // ---- Dropdown menu for mobile ----
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    }
  });

  // ---- Product Filtering ----
  initProductFilters();

  // ---- Newsletter ----
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input.value) {
        alert(t('newsletterSuccess'));
        input.value = '';
      }
    });
  }

  // ---- Filter toggle ----
  document.querySelectorAll('.filter-group h4').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('collapsed');
    });
  });
});

// ---- Product Filter Functions ----
function initProductFilters() {
  const filterOptions = document.querySelectorAll('.filter-option input[type="checkbox"]');
  const sortSelect = document.querySelector('.sort-select');
  const clearBtn = document.querySelector('.filter-clear');

  if (filterOptions.length === 0) return;

  filterOptions.forEach(option => {
    option.addEventListener('change', () => {
      filterProducts();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      filterProducts();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      filterOptions.forEach(opt => opt.checked = false);
      filterProducts();
    });
  }
}

function filterProducts() {
  const products = document.querySelectorAll('.product-card');
  const activeFilters = {};

  // Gather active filters
  document.querySelectorAll('.filter-group').forEach(group => {
    const category = group.getAttribute('data-filter');
    if (!category) return;

    const checked = group.querySelectorAll('input[type="checkbox"]:checked');
    if (checked.length > 0) {
      activeFilters[category] = Array.from(checked).map(c => c.value.toLowerCase());
    }
  });

  let visibleCount = 0;

  products.forEach(product => {
    let visible = true;

    // Check each filter category
    for (const [category, values] of Object.entries(activeFilters)) {
      const productValue = product.getAttribute(`data-${category}`)?.toLowerCase();
      if (productValue && !values.includes(productValue)) {
        visible = false;
        break;
      }
    }

    product.style.display = visible ? '' : 'none';
    if (visible) visibleCount++;
  });

  // Update count
  const countEl = document.querySelector('.product-count');
  if (countEl) {
    countEl.textContent = `${visibleCount} ${t('productCount')}`;
  }
}

// Sort products
function sortProducts(criteria) {
  const container = document.querySelector('.products-grid');
  if (!container) return;

  const products = Array.from(container.querySelectorAll('.product-card'));

  products.sort((a, b) => {
    switch (criteria) {
      case 'name-asc':
        return (a.dataset.name || '').localeCompare(b.dataset.name || '');
      case 'name-desc':
        return (b.dataset.name || '').localeCompare(a.dataset.name || '');
      default:
        return 0;
    }
  });

  products.forEach(product => container.appendChild(product));
}


// ---- Filter Sidebar Mobile Toggle ----
(function() {
  var toggleBtn = document.getElementById('filter-toggle-btn');
  var sidebarBody = document.getElementById('filter-sidebar-body');
  var sidebar = toggleBtn && toggleBtn.closest('.filter-sidebar');

  if (!toggleBtn || !sidebarBody) return;

  toggleBtn.addEventListener('click', function() {
    var isOpen = sidebarBody.classList.contains('open');
    if (isOpen) {
      sidebarBody.classList.remove('open');
      toggleBtn.classList.remove('open');
      if (sidebar) sidebar.classList.remove('panel-open');
      toggleBtn.querySelector('.filter-toggle-text').textContent = 'Filtrele';
    } else {
      sidebarBody.classList.add('open');
      toggleBtn.classList.add('open');
      if (sidebar) sidebar.classList.add('panel-open');
      toggleBtn.querySelector('.filter-toggle-text').textContent = 'Kapat';
    }
  });
})();
