const allBtns = document.querySelectorAll('.btn')
const numbersBtns = document.querySelectorAll('.numbers')
const clearBtn = document.querySelector('.clearBtn')
const result = document.querySelector('.result')
const plus = document.querySelector('.plus')
const percent = document.querySelector('.percent')
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const minus = document.querySelector('.minus')
const plusMinus = document.querySelector('.plusMinus')
const dot = document.querySelector('.dot')
const final1 = document.querySelector('.final1')
const final2 = document.querySelector('.final2')
const final3 = document.querySelector('.final3')
const activeSign = document.querySelector('.activeSign')

/////Wprowadzanie liczb
numbersBtns.forEach(number => {
    number.addEventListener('click', function(){
        if((final1.textContent === '' && number.textContent === '0') || (final1.textContent === '' && activeSign.textContent === '=')){
            return
        }
        else{
            final1.textContent += number.textContent
        }})
})
//////Dodawanie liczb
plus.addEventListener('click', function(){
        final2.textContent = final1.textContent
        final1.textContent = ''
        plus.classList.add('activeBtn')
        activeSign.textContent = plus.textContent    
})
///////Odejmowanie liczb
minus.addEventListener('click', function(){
        final2.textContent = final1.textContent
        final1.textContent = ''
        minus.classList.add('activeBtn')
        activeSign.textContent = minus.textContent  
})
//////Mnożenie liczb
multiply.addEventListener('click', function(){
        final2.textContent = final1.textContent
        final1.textContent = ''
        multiply.classList.add('activeBtn')
        activeSign.textContent = multiply.textContent
})
//////Dzielenie liczb
divide.addEventListener('click', function(){
    final2.textContent = final1.textContent
    final1.textContent = ''
    divide.classList.add('activeBtn')
    activeSign.textContent = divide.textContent
})
//////Procent z liczby
percent.addEventListener('click', function(){
    if(final1.textContent === ''){
        return
    }else{
        let a = Number(final1.textContent)
        final1.textContent = a/100
    }
})
//////Wstawienie minusa przed liczbę
plusMinus.addEventListener('click', function(){
    if(activeSign.textContent === '='){
        return
    }else if(final1.textContent === ''){
        final1.textContent = '-'
    }
})
//////Wstawianie kropki
dot.addEventListener('click', function(){
    if(final1.textContent === ''){
        final1.textContent = '0.'
    }else{
        final1.textContent += '.'
    }
})
//////////Przycisk "równa się"
result.addEventListener('click', function(){
////////////Dodawanie
    if(plus.classList.contains('activeBtn')){
        if(final3.textContent === ''){
            let a = Number(final1.textContent)
            let b = Number(final2.textContent)
            final3.textContent = a + b
            plus.classList.remove('activeBtn')
            clearScreen()
        }else{
            let a = Number(final3.textContent)
            let b = Number(final1.textContent)
            final3.textContent = a + b
            plus.classList.remove('activeBtn')
            clearScreen()
        }
///////////////Odejmowanie
    }else if(minus.classList.contains('activeBtn')){
        if(final3.textContent === ''){
            let a = Number(final2.textContent)
            let b = Number(final1.textContent)
            final3.textContent = a - b
            minus.classList.remove('activeBtn') 
            clearScreen()
        }else{
            let a = Number(final3.textContent)
            let b = Number(final1.textContent)
            final3.textContent = a - b
            minus.classList.remove('activeBtn')
            clearScreen() 
        }
/////////////////////Mnożenie
    }else if(multiply.classList.contains('activeBtn')){
            if(final3.textContent === ''){
                let a = Number(final1.textContent)
                let b = Number(final2.textContent)
                final3.textContent = a * b
                multiply.classList.remove('activeBtn')
                clearScreen()
            }else{
                let a = Number(final3.textContent)
                let b = Number(final1.textContent)
                final3.textContent = a * b
                multiply.classList.remove('activeBtn')
                clearScreen()
            }
//////////////////////Dzielenie
        }else if(divide.classList.contains('activeBtn')){
            if(final3.textContent === ''){
                let a = Number(final2.textContent)
                let b = Number(final1.textContent)
                final3.textContent = a / b
                divide.classList.remove('activeBtn')
                clearScreen()
        }else{
                let a = Number(final3.textContent)
                let b = Number(final1.textContent)
                final3.textContent = a / b
                divide.classList.remove('activeBtn')
                clearScreen()
        }
}})
const clearScreen = () => {
    final1.textContent = ''
    final2.textContent = '' 
    activeSign.textContent = '='
}
//Czyszczenie Kalkulatora
clearBtn.addEventListener('click', function(){
    final1.textContent = ''
    final2.textContent = ''
    final3.textContent = ''
    activeSign.textContent = ''

    allBtns.forEach(btn => {
        btn.classList.remove('activeBtn')
    })

})