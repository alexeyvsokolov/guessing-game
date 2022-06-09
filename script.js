let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

if (maxValue < minValue) {
    [maxValue, minValue] = [minValue, maxValue]; // Значения меняются местами если max меньше min.
}

if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
}

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
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;
    if (maxValue < minValue) {
        [maxValue, minValue] = [minValue, maxValue]; // Значения меняются местами если max меньше min.
    }
    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
        minValue = 0;
        maxValue = 100;
    }
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
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0: 
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                    break;      
            
                case 1:
                    answerPhrase = `Вы забыли, какое число загадали?\n\u{1F92A}`
                    break;

                case 2: 
                    answerPhrase = `Вы ошиблись с числом!\n\u{1F9D0}`
                    break;      
            
                case 3:
                    answerPhrase = `Не жульничайте!\n\u{1F620}`
                    break;
            }
            /* Старый метод генерации фразы спомощью тернарного оператора.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            */
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1; // Изменение нижней границы поискового диапазона.
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4); // Генерируется случайное число от 0 до 4.
            switch (phraseRandom) {
                case 0: 
                    answerPhrase = `Вы загадали число ${answerNumber }?`
                    break;      
            
                case 1:
                    answerPhrase = `Наверное, это число ${answerNumber }?`
                    break;

                case 2: 
                    answerPhrase = `Возможно ${answerNumber }?`
                    break;      
            
                case 3:
                    answerPhrase = `Это число ${answerNumber }?`
                    break;

                case 4:
                    answerPhrase = `Скорее всего это число ${answerNumber }?`
                    break;
            }
            /* Старый метод генерации фразы спомощью тернарного оператора.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?` :
                `Наверное, это число ${answerNumber }?`;
            */
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () { // Код для кнопки «Меньше».
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0: 
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`
                    break;      
            
                case 1:
                    answerPhrase = `Вы забыли, какое число загадали?\n\u{1F92A}`
                    break;

                case 2: 
                    answerPhrase = `Вы ошиблись с числом!\n\u{1F9D0}`
                    break;      
            
                case 3:
                    answerPhrase = `Не жульничайте!\n\u{1F620}`
                    break;
            }
            /* Старый метод генерации фразы спомощью тернарного оператора.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            */
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1; // Изменение верхней границы поискового диапазона.
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4); // Генерируется случайное число от 0 до 4.
            switch (phraseRandom) {
                /*
                case 0: 
                    answerPhrase = `Вы загадали число ${answerNumber }?`
                    break;      
            
                case 1:
                    answerPhrase = `Наверное, это число ${answerNumber }?`
                    break;

                case 2: 
                    answerPhrase = `Возможно ${answerNumber }?`
                    break;      
            
                case 3:
                    answerPhrase = `Это число ${answerNumber }?`
                    break;

                case 4:
                    answerPhrase = `Скорее всего это число ${answerNumber }?`
                    break;

                    case 0: 
                    answerPhrase = `Вы загадали число ${answerNumber }?`
                    break;      
            */
                case 1:
                    answerPhrase = `Наверное, это число `
                    break;

                case 2: 
                    answerPhrase = `Возможно `
                    break;      
            
                case 3:
                    answerPhrase = `Это число `
                    break;

                case 4:
                    answerPhrase = `Скорее всего это число `
                    break;
            }
            /* Старый метод генерации фразы спомощью тернарного оператора.
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали число ${answerNumber }?` :
                `Наверное, это число ${answerNumber }?`;
            */
            // answerField.innerText = answerPhrase;
            
            const numberWord = numberToText();
            answerField.innerText = answerPhrase + numberWord + `?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () { // Код для кнопки "Верно".
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0: 
                    answerPhrase = `Я всегда угадываю\n\u{1F60E}`
                    break;      
            
                case 1:
                    answerPhrase = `Yes! \n\u{1F60E}`
                    break;

                case 2: 
                    answerPhrase = `Отлично!\n\u{1F973}`
                    break;      
            
                case 3:
                    answerPhrase = `Я выиграл!\n\u{1F929}`
                    break;
            }
        /*
        const answerPhrase = (phraseRandom === 1) ?
            `Я всегда угадываю\n\u{1F60E}` :
            `Yes! \n\u{1F60E}`;
        */
        answerField.innerText = answerPhrase
        gameRun = false;
    }
})

// Преобразования числа в текстовую форму.
// Число выводится в текстовой форме, если на его запись в текстовой форме требуется меньше 20 символов, включая пробелы.
/*
По остатку от деления на 10, 100, 1000 и сравнению с 0 и 20 определить текстовую запись числа.

От 20 до 99 текстовая запись числа строится по принципу «Название разряда десятка + название двузначного остатка от деления на 10».

От 101 до 999 текстовая запись числа строится по принципу «Название разряда сотен + название двузначного остатка от деления на 100».
*/

let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть','семь', 'восемь', 'девять'];
let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать','шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят','восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function numberToText() { // Текстовая запись числа
    let number = answerNumber;
    let text = '';

    if (number == 0) {
        text = 'ноль';
        return text;
    }

    if (number > 0) {
        return units[Math.floor(number / 1)];
    }



    
}