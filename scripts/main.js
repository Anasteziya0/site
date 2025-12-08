// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    // Переключение меню
    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList && window.innerWidth <= 768) {
                navList.classList.remove('active');
            }
        });
    });
    
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!navList || !navToggle) return;
        
        const isClickInsideNav = navList.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && window.innerWidth <= 768) {
            navList.classList.remove('active');
        }
    });
    
    // Анимация прогресс-баров при прокрутке
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-item__bar');
        
        skillBars.forEach(bar => {
            const percent = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = percent;
            }, 300);
        });
    }
    
    // Запуск анимации при загрузке
    setTimeout(animateSkills, 500);
    
    // Обновление года в футере
    const yearElement = document.querySelector('.footer__copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = yearElement.textContent.replace('2024', currentYear);
    }
});