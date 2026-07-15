// ============================================
// 1. HAMBURGER MENU (Mobile Navigation)
// ============================================
const hamburger = document.getElementById('hamburgerToggle');
const navList = document.querySelector('.nav-list');

if (hamburger && navList) {
    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navList.style.display === 'flex') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'flex';
        }
    });

    // Tutup menu otomatis jika layar diperbesar ke desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navList.style.display = '';
        }
    });

    // Tutup menu jika klik di luar area nav (opsional, lebih baik)
    document.addEventListener('click', function(e) {
        const header = document.querySelector('.site-header');
        if (header && !header.contains(e.target) && navList.style.display === 'flex') {
            navList.style.display = 'none';
        }
    });
}

// ============================================
// 2. FAQ ACCORDION
// ============================================
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
        const parentItem = this.closest('.faq-item');
        if (!parentItem) return;

        // Toggle class 'active' pada item yang diklik
        const isActive = parentItem.classList.contains('active');
        
        // Tutup semua FAQ item lainnya (agar hanya 1 terbuka)
        document.querySelectorAll('.faq-item').forEach(function(item) {
            item.classList.remove('active');
        });

        // Jika sebelumnya tidak aktif, maka aktifkan (toggle logic)
        if (!isActive) {
            parentItem.classList.add('active');
        }
    });
});

// ============================================
// 3. STATISTIK COUNTER (Animasi Angka)
// ============================================
const statNumbers = document.querySelectorAll('.statistik-number');

// Fungsi untuk menjalankan animasi angka
function animateNumber(el) {
    const target = parseInt(el.getAttribute('data-count')) || 0;
    let current = 0;
    const increment = target / 70; // Kecepatan animasi
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 20);
}

// Intersection Observer: mulai animasi saat elemen terlihat
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateNumber(el);
                observer.unobserve(el); // Hanya jalan 1 kali
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(function(num) {
        observer.observe(num);
    });
} else {
    // Fallback untuk browser lama: jalanin langsung
    statNumbers.forEach(function(num) {
        animateNumber(num);
    });
}
