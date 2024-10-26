const lyricsLines = document.querySelectorAll('.lyrics-container p');
let lastActiveIndex = -1; // Индекс последней активной строки

function updateLyrics() {
    const currentTime = audioPlayer.currentTime;

    for (let i = 0; i < lyricsLines.length; i++) {
        const lineTime = parseFloat(lyricsLines[i].getAttribute('data-time'));
        const nextLineTime = lyricsLines[i + 1] ? parseFloat(lyricsLines[i + 1].getAttribute('data-time')) : Infinity;

        if (currentTime >= lineTime && currentTime < nextLineTime) {
            if (lastActiveIndex !== i) { // Проверка на изменение строки
                lyricsLines[i].classList.add('active');
                lyricsLines[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                lastActiveIndex = i; // Сохранение индекса активной строки
            }
        } else {
            lyricsLines[i].classList.remove('active');
        }
    }

    // Если дошли до конца, прекращаем прокрутку
    if (currentTime >= parseFloat(lyricsLines[lyricsLines.length - 1].getAttribute('data-time'))) {
        audioPlayer.pause(); // Остановить аудио
        // Можно добавить код для выполнения действия, если хотите, например, показать сообщение
    }
}

   // Получаем элемент уведомления
   const notification = document.getElementById('fullscreen-notification');

   // Добавляем обработчик события на нажатие
   notification.addEventListener('click', function() {
       // Проверяем, есть ли класс "hidden"
       if (!notification.classList.contains('hidden')) {
           // Добавляем класс, чтобы скрыть уведомление
           notification.classList.add('hidden');
       }
   });
