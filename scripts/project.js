
    document.addEventListener('DOMContentLoaded', function() {
        // Фильтрация проектов
        const filters = document.querySelectorAll('.filter');
        const projects = document.querySelectorAll('.project');
        
        filters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Убираем активный класс у всех фильтров
                filters.forEach(f => f.classList.remove('active'));
                // Добавляем активный класс текущему фильтру
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Показываем/скрываем проекты
                projects.forEach(project => {
                    const category = project.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        project.style.display = 'block';
                        // Анимация появления
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            project.style.transition = 'opacity 0.3s, transform 0.3s';
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        // Анимация исчезновения
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Анимация появления проектов при загрузке
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.style.opacity = '0';
                project.style.transform = 'translateY(20px)';
                project.style.transition = 'opacity 0.5s, transform 0.5s';
                
                setTimeout(() => {
                    project.style.opacity = '1';
                    project.style.transform = 'translateY(0)';
                }, 10);
            }, index * 100);
        });
    });