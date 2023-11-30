function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1;
}

function pickLottoNumberCase1() {
    var pickNumbers = [];
    for (var i = 0; pickNumbers.length < 6; i++) {
        const randNumber = generateRandomNumber(1, 45);
        if (!pickNumbers.includes(randNumber)) {
            pickNumbers.push(randNumber);
        }
    }
}

function pickLottoNumberCase2() {
    var pickNumbers = [];
    var numbers = [];
    for (var i = 1; i <= 45; i++) {
        numbers.push(i);
    }

    for (var i = 0; i < 6; i++) {
        var pickIdx = generateRandomNumber(0, numbers.length - 1);
        pickNumbers.push(numbers[pickIdx]);
        numbers.splice(pickIdx, 1)
    }

    return pickNumbers;
}

const button = document.querySelector('#generateLottoNumbersButton');
const ul = document.querySelector('#lottoNumbers');
button.addEventListener('click', function() {
    const numbers = pickLottoNumberCase2();
    for (var i = 0; i < numbers.length; i++) {
        var color = '';
        if (numbers[i] <= 10) {
            color = 'red';
        } else if (numbers[i] <= 40) {
            color = 'yellow';
        } else {
            color = 'blue';
        }
        ul.innerHTML += `<li style = "color : ${color}">${numbers[i]}</li>`
    }
});
