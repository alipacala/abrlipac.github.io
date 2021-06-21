const expressionEl = document.getElementById('expression'),
  resultEl = document.getElementById('result'),
  table = document.getElementById('buttons')
let expressionValue = '',
  result

const appendExpressionEl = v => {
  expressionValue += v
  expressionEl.innerText = expressionValue
}
const clearScreen = () => {
  expressionValue = ''
  result = ''
  expressionEl.innerText = expressionValue
  resultEl.innerText = result
}

table.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    buttonText = e.target.innerText
    if (buttonText == 'x') {
      appendExpressionEl('*')
    } else if (buttonText == '+') {
      appendExpressionEl('/')
    } else if (buttonText == 'mod') {
      appendExpressionEl('%')
    } else if (buttonText == 'C') {
      clearScreen()
    } else if (buttonText == '=') {
      resultEl.innerText = eval(expressionValue)
    } else {
      appendExpressionEl(buttonText)
    }
  }
})

window.onerror = () => {
  Android.toastError('¡Ingrese una expresión válida!')
  clearScreen()
}
