
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form__form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Показываем сообщение об отправке
        alert(`Сообщение отправлено!\n\nИмя: ${name}\nEmail: ${email}\n\nВаше сообщение будет обработано в ближайшее время.`);
        
        // Сбрасываем форму
        contactForm.reset();
    });
    
    // Анимация появления элементов
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 10);
        }, index * 100);
    });
});
