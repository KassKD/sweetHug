
const messages = [
    "Обіймаю тебе всім серцем. Навіть сильні втомлюються.",
    "Ти заслуговуєш на тепло. Навіть якщо просто сидиш у піжамі.",
    "Ось тобі пледик, какао і спокій. Все буде добре.",
    "Усе йде своїм шляхом. Просто видихни. Я поруч, це стосується тебе, санчоус.",
    "Ти — диво, навіть якщо сьогодні нічого не зробив."
];

document.getElementById('hugButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    const messageDiv = document.getElementById('messages');
    messageDiv.style.opacity = 0;
    setTimeout(() => {
        messageDiv.textContent = message;
        messageDiv.style.opacity = 1;
    }, 300);
});
