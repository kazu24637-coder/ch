// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// No Testimonial Slider for now.

// Basic Mobile Menu toggle logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
mobileBtn.addEventListener('click', () => {
    alert("Mobile menu clicked - this would reveal a dropdown layout in a full app.");
});

// Checkout Modal Logic
const modal = document.getElementById('checkoutModal');
const buyBtns = document.querySelectorAll('.buy-btn');
const closeBtn = document.querySelector('.close-btn');
const paymentBtns = document.querySelectorAll('.payment-btn');

const paymentSelection = document.getElementById('paymentSelection');
const forms = document.querySelectorAll('.payment-form');
const backBtns = document.querySelectorAll('.back-btn');
const submitBtns = document.querySelectorAll('.submit-order-btn');
const successScreen = document.getElementById('successScreen');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');

function resetModal() {
    paymentSelection.style.display = 'block';
    forms.forEach(form => form.style.display = 'none');
    successScreen.style.display = 'none';
    closeBtn.style.display = 'block';
    document.querySelectorAll('.form-input').forEach(input => input.value = '');
}

if (modal) {
    buyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            resetModal();
            modal.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Payment Selection Click
    paymentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            paymentSelection.style.display = 'none';
            const method = btn.getAttribute('data-method');
            document.getElementById(method + 'Form').style.display = 'block';
        });
    });

    // Back Buttons
    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            forms.forEach(form => form.style.display = 'none');
            paymentSelection.style.display = 'block';
        });
    });

    // Submit Order / Pay Now
    submitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            forms.forEach(form => form.style.display = 'none');
            closeBtn.style.display = 'none';
            successScreen.style.display = 'block';
        });
    });

    closeSuccessBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}
