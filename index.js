// MAPEIA OS ITENS NO HTML // 
let main = document.querySelector('main')
let root = document.querySelector(':root')
let input = document.getElementById('input')
let resultInput = document.getElementById('result')

let allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


// ADICIONA OS SINAIS NO INPUT DE CONTA //
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        let value = charKeyBtn.dataset.value
        input.value += value
    })
})

// ADICIONA A FUNÇÃO DE LIMPAR O INPUT //
document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

// VALIDA SE O USUÁRIO ESTÁ DIGITANDO APENAS NÚMEROS //
input.addEventListener('keydown', function (ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }

    // INSERE A TECLA DE APAGAR DO TECLADO //
    // SLICE CORTA O ARRAY //
    //EX.: SLICE(START, END)//
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    // INSERE A TECLA DE ENTER DO TECLADO //
    if (ev.key === 'Enter') {
        calculate()
    }
})


// INSERE A FUNÇÃO DE CALCULAR //
document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.classList.add('error')
    resultInput.value = 'ERROR'
    document.getElementById('clear').addEventListener('click', function () {
        input.value = ''
        resultInput.classList.remove('error')
        resultInput.value = ''
        document.getElementById('result').value = ''
        input.focus()
    })
    let result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')

}

// INSERE A OPÇÃO DE COPIAR O CALCULO //
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    let button = ev.currentTarget
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})


// INSERE A OPÇÃO DE TROCAR O TEMA //
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === 'dark') {
        document.getElementById('themeSwitcher').innerText = 'Escuro'
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        document.getElementById('themeSwitcher').innerText = 'Claro'
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})