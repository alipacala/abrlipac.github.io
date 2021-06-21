const expressionEl = document.getElementById('expression'),
  resultEl = document.getElementById('result'),
  table = document.getElementById('buttons')
let expressionValue = '',
  result

const appendExpressionEl = v => {
  expressionValue += v
  expressionEl.value = expressionValue
}
const clearScreen = () => {
  expressionValue = expressionEl.value = resultEl.innerText = ''
}

table.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    buttonText = e.target.innerText
    if (buttonText == 'x') appendExpressionEl('*')
    else if (buttonText == '÷') appendExpressionEl('/')
    else if (buttonText == 'mod') appendExpressionEl('%')
    else if (buttonText == 'C') clearScreen()
    else if (buttonText == '=') {
      try {
        result = eval(expressionValue)
      } catch (error) {
        Android.showToast('Ingrese una expresión válida')
        Android.incrErrorCount()
        clearScreen()
      }
      if (result == undefined) Android.showToast('Debe ingresar una expresión')
      else resultEl.innerText = result
    } else appendExpressionEl(buttonText)
  }
})
