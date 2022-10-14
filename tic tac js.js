let playerOne = 0

const in1 = document.querySelector("#in1")
const in2 = document.querySelector("#in2")
const in3 = document.querySelector("#in3")
const in4 = document.querySelector("#in4")
const in5 = document.querySelector("#in5")
const in6 = document.querySelector("#in6")
const in7 = document.querySelector("#in7")
const in8 = document.querySelector("#in8")
const in9 = document.querySelector("#in9")

const reset = document.querySelector('#btn1')

in1.addEventListener('click', () => {
    if (playerOne === 0) {
        in1.value = 'X'
        in1.style.color = 'red'
        in1.disabled = true
        playerOne = 1
    }
    else {
        in1.value = 'O'
        in1.style.color = 'orange'
        in1.disabled = true
        playerOne = 0
    }
    win1();
})
in2.addEventListener('click', () => {
    if (playerOne === 0) {
        in2.value = 'X'
        in2.style.color = 'red'
        in2.disabled = true
        playerOne = 1
    }
    else {
        in2.value = 'O'
        in2.style.color = 'orange'
        in2.disabled = true
        playerOne = 0
    }
    win1();
})
in3.addEventListener('click', () => {
    if (playerOne === 0) {
        in3.value = 'X'
        in3.style.color = 'red'
        in3.disabled = true
        playerOne = 1
    }
    else {
        in3.value = 'O'
        in3.style.color = 'orange'
        in3.disabled = true
        playerOne = 0
    }
    win1();
})
in4.addEventListener('click', () => {
    if (playerOne === 0) {
        in4.value = 'X'
        in4.style.color = 'red'
        in4.disabled = true
        playerOne = 1
    }
    else {
        in4.value = 'O'
        in4.style.color = 'orange'
        in4.disabled = true
        playerOne = 0
    }
    win1();
})
in5.addEventListener('click', () => {
    if (playerOne === 0) {
        in5.value = 'X'
        in5.style.color = 'red'
        in5.disabled = true
        playerOne = 1
    }
    else {
        in5.value = 'O'
        in5.style.color = 'orange'
        in5.disabled = true
        playerOne = 0
    }
    win1();
})
in6.addEventListener('click', () => {
    if (playerOne === 0) {
        in6.value = 'X'
        in6.style.color = 'red'
        in6.disabled = true
        playerOne = 1
    }
    else {
        in6.value = 'O'
        in6.style.color = 'orange'
        in6.disabled = true
        playerOne = 0
    }
    win1();
})
in7.addEventListener('click', () => {
    if (playerOne === 0) {
        in7.value = 'X'
        in7.style.color = 'red'
        in7.disabled = true
        playerOne = 1
    }
    else {
        in7.value = 'O'
        in7.style.color = 'orange'
        in7.disabled = true
        playerOne = 0
    }
    win1();
})
in8.addEventListener('click', () => {
    if (playerOne === 0) {
        in8.value = 'X'
        in8.style.color = 'red'
        in8.disabled = true
        playerOne = 1
    }
    else {
        in8.value = 'O'
        in8.style.color = 'orange'
        in8.disabled = true
        playerOne = 0
    }
    win1();
})
in9.addEventListener('click', () => {
    if (playerOne === 0) {
        in9.value = 'X'
        in9.style.color = 'red'
        in9.disabled = true
        playerOne = 1
    }
    else {
        in9.value = 'O'
        in9.style.color = 'orange'
        in9.disabled = true
        playerOne = 0
    }
    win1();
})

let win1 = () => {
    if (in1.value === in2.value && in2.value === in3.value) {
        in1.style.color = 'green'
        in2.style.color = 'green'
        in3.style.color = 'green'
        alert(`Winner is player ${in3.value}`)
        dis();
    }
    else if (in1.value === in4.value && in4.value === in7.value) {
        in1.style.color = 'green'
        in4.style.color = 'green'
        in7.style.color = 'green'
        alert(`Winner is player ${in7.value}`)
        dis();
    }
    else if (in7.value === in8.value && in8.value === in9.value) {
        in7.style.color = 'green'
        in8.style.color = 'green'
        in9.style.color = 'green'
        alert(`Winner is player ${in9.value}`)
        dis();
    }
    else if (in9.value === in6.value && in6.value === in3.value) {
        in9.style.color = 'green'
        in6.style.color = 'green'
        in3.style.color = 'green'
        alert(`Winner is player ${in3.value}`)
        dis();
    }
    else if (in9.value === in5.value && in5.value === in1.value) {
        in9.style.color = 'green'
        in5.style.color = 'green'
        in1.style.color = 'green'
        alert(`Winner is player ${in1.value}`)
        dis();
    }
    else if (in4.value === in5.value && in5.value === in6.value) {
        in4.style.color = 'green'
        in5.style.color = 'green'
        in6.style.color = 'green'
        alert(`Winner is player ${in6.value}`)
        dis();
    }
    else if (in2.value === in5.value && in5.value === in8.value) {
        in2.style.color = 'green'
        in5.style.color = 'green'
        in8.style.color = 'green'
        alert(`Winner is player ${in8.value}`)
        dis();
    }
    else if (in7.value === in5.value && in5.value === in3.value) {
        in7.style.color = 'green'
        in5.style.color = 'green'
        in3.style.color = 'green'
        alert(`Winner is player ${in3.value}`)
        dis();
    }
}

let dis = () => {
    in1.disabled = true
    in2.disabled = true
    in3.disabled = true
    in4.disabled = true
    in5.disabled = true
    in6.disabled = true
    in7.disabled = true
    in8.disabled = true
    in9.disabled = true
}


reset.addEventListener('click', () => {
    playerOne = 0

    in1.disabled = false
    in1.value = '_'
    in1.style.color = 'black'

    in2.disabled = false
    in2.value = '-'
    in2.style.color = 'black'

    in3.disabled = false
    in3.value = '_'
    in3.style.color = 'black'

    in4.disabled = false
    in4.value = '-'
    in4.style.color = 'black'

    in5.disabled = false
    in5.value = '.'
    in5.style.color = 'black'

    in6.disabled = false
    in6.value = '-'
    in6.style.color = 'black'

    in7.disabled = false
    in7.value = '_'
    in7.style.color = 'black'

    in8.disabled = false
    in8.value = '-'
    in8.style.color = 'black'

    in9.disabled = false
    in9.value = '_'
    in9.style.color = 'black'
})

