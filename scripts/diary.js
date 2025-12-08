
// Обработка формы добавления записи
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.add-entry__form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Получаем данные из формы
        const date = document.getElementById('date').value;
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const status = document.querySelector('input[name="status"]:checked').value;
        
        // Создаем новую запись
        const newEntry = document.createElement('div');
        let statusClass = '';
        let statusIcon = '';
        
        // Определяем класс и иконку статуса
        switch(status) {
            case 'completed':
                statusClass = 'diary-entry--completed';
                statusIcon = '✓';
                break;
            case 'in-progress':
                statusClass = 'diary-entry--in-progress';
                statusIcon = '↻';
                break;
            case 'pending':
                statusClass = 'diary-entry--pending';
                statusIcon = '✗';
                break;
        }
        
        // Форматируем дату (преобразуем из YYYY-MM-DD в "дд мес")
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short'
        });
        
        // Создаем HTML новой записи
        newEntry.className = `diary-entry ${statusClass}`;
        newEntry.innerHTML = `
            <div class="diary-entry__date">${formattedDate}</div>
            <div class="diary-entry__content">
                <h3 class="diary-entry__title">${title}</h3>
                <p class="diary-entry__description">${description}</p>
            </div>
            <div class="diary-entry__status">
                <span class="status-icon">${statusIcon}</span>
            </div>
        `;
        
        // Добавляем новую запись в начало списка
        const entriesContainer = document.querySelector('.diary-entries');
        entriesContainer.prepend(newEntry);
        
        // Сбрасываем форму
        form.reset();
        
        // Показываем сообщение об успехе
        alert('Запись успешно добавлена!');
    });
});
