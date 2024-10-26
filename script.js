document.addEventListener('DOMContentLoaded', function() {
    const chibi = document.querySelector('.fixed-image'); // Обрабатываем чибика
    const dialog = document.getElementById('dialog');

    chibi.addEventListener('click', function() {
        // Показываем диалог и меняем выражение лица на 3 секунды
        dialog.classList.remove('hidden');
        chibi.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8edbe570-22af-4904-99e7-678d64766c91/difjyqp-19c6d159-c57a-4458-a046-cb9b7bda67ea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZGJlNTcwLTIyYWYtNDkwNC05OWU3LTY3OGQ2NDc2NmM5MVwvZGlmanlxcC0xOWM2ZDE1OS1jNTdhLTQ0NTgtYTA0Ni1jYjliN2JkYTY3ZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.j32vbyqbiwgJAN0pMFkXKLO3Ot_X8bmv0Tm_zAvbz8I' // Новое изображение чибика с улыбкой
        setTimeout(function() {
            dialog.classList.add('hidden');
            chibi.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8edbe570-22af-4904-99e7-678d64766c91/difjyqt-dbf11763-cf38-46c6-8807-405322d1122d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZGJlNTcwLTIyYWYtNDkwNC05OWU3LTY3OGQ2NDc2NmM5MVwvZGlmanlxdC1kYmYxMTc2My1jZjM4LTQ2YzYtODgwNy00MDUzMjJkMTEyMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gs9rHlfwYUH1Aa11NK_tQVn7JvozK-qvmMJrHXSoxOI'; // Возвращаем исходное изображение
        }, 3000);
    });
});
