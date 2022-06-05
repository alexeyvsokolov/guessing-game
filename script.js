let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

minValue = minValue < -999 ? minValue = -999 : minValue = minValue;
maxValue = maxValue > 999 ? maxValue = 999 : maxValue = maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2); // Середина числового диапазона
let orderNumber = 1; // Номер первого вопроса.
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField'); // Вопрос №_
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber; // Вопрос № 1
answerField.innerText = `Вы загадали число ${answerNumber}?`; // Вы загадали число [__]? - Середина числового диапазона (answerNumber - подставляется середина числового диапазона).

document.getElementById('btnRetry').addEventListener('click', function () { // Кнопка "Заново"
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2); // Середина числового диапазона
    orderNumber = 1; // Номер первого вопроса.
    orderNumberField.innerText = orderNumber; // Вопрос № 1
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () { // Код для кнопки «Больше».
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random()); // Генерируется случайное число от 0 до 1.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1; // Изменение нижней границы поискового диапазона.
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2); // Генерируется случайное число от 0 до 2.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?` :
                `Наверное, это число ${answerNumber }?`;

            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { // Код для кнопки «Меньше».
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; // Изменение верхней границы поискового диапазона.
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2); // Генерируется случайное число от 0 до 2.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?` :
                `Наверное, это число ${answerNumber }?`;

            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () { // Код для кнопки "Верно".
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 2); // Генерируется случайное число от 0 до 2.
        const answerPhrase = (phraseRandom === 1) ?
            `Я всегда угадываю\n\u{1F60E}` :
            `Yes! \n\u{1F60E}`;

        answerField.innerText = answerPhrase
        gameRun = false;
    }
})

