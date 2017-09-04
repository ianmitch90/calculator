const keys = document.querySelectorAll('.keys')
const theDisplay = document.querySelector('.display')

var input = []
let answer = ''

for(i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function (event) {
    const elementClicked = event.target
    const elementID = elementClicked.id

    switch(elementID) {
      case 'clear':
        input = []
        theDisplay.innerHTML = ''
        break

      case 'equal':
        let answer = eval(input.join(""))
        theDisplay.textContent = answer
        console.log(answer)
        break

      case '/': case '-': case '+':
        input.push(elementID)
        break

      case '*':
        input.push('*')
        break

      default:
        input.push(parseInt(elementID))
        theDisplay.textContent = elementID
    }
    console.log(input)
  })
}
