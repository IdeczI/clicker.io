//Стрелочные функции

// Создание стрелочной функции:
// 1) создать константу
// 2) придумать имя
// 3) присвоить функцию:
// 3.1) указать круглые скубки (параметры функции)
// 3.2) написать стрелку (характерезует стрелочную функцию)
// 3.3) указать фигурные скобки (тело функции)
// 4) колючевое слово return

function calc(num1, num2, operation) {
    if (operation == '+') {
        return num1 + num2
    } else if (operation == '-') {
        return num1 - num2
    } else {
        return 0
    }
}
let result = calc(100, 200, '+')
console.log(result)











// DOM - элементы


let i = 0
let level = 1
let finishI = 5

// function
const handleClick = (step) => {
  if (i >= finishI) {
    alert('Вы выиграли')
    finishI += 7
    finish.innerHTML = finishI

    i = 0
    counter.innerHTML = i

    // Увеличиваем уровень
    level++
    xp.innerHTML = level
  }

  if (level == 2) {
    buttondouble.style.display = 'inline'
  }

  i = i + step
  counter.innerHTML = i
}

// doubleclick
const buttondouble = document.querySelector('#doubleclick')
buttondouble.style.display = 'none'

// finish
const finish = document.querySelector('.finish')
finish.innerHTML = finishI

// span.xp
const xp = document.querySelector('.xp')
xp.innerHTML = level

// span.counter
const counter = document.querySelector('.counter')
counter.style.color = 'blue'
counter.innerHTML = i

// button id
const button = document.querySelector('#button')
button.addEventListener('click', () => {
  handleClick(1)
})

buttondouble.addEventListener('click', () => {
  handleClick(3)
})