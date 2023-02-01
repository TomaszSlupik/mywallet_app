const addone = document.querySelector('.addone')
const newtransaction = document.querySelector('.newtransaction')
const cancelnew = document.querySelector('.cancelnew')
const addnew = document.querySelector('.addnew')
const inputName = document.querySelector('#name')
const inputPrice = document.querySelector('#price')
const valueNothing = document.querySelector('#category')
const error = document.querySelector('.error')
const deletebox = document.querySelector('.deletebox')
const deletealltransaction = document.querySelector('.deletealltransaction')
const deletewrapperboxtask = document.querySelector('.deletewrapperboxtask')
const deletewrapperbox = document.querySelector('.deletewrapperbox')
const btnone = document.querySelector('.btnone')
const btntwo = document.querySelector('.btntwo')
let mywallet = [0]
let testowanie = []
const firstboxlisttransactions = document.querySelector('.firstboxlisttransactions')
const secondboxlisttransactions = document.querySelector('.secondboxlisttransactions')
const expenseOption = document.querySelector('.expenseOption')
const expenseInput = document.querySelector('.expenseInput')

addone.addEventListener('click', () => {
    newtransaction.classList.add('active')
    newtransaction.classList.remove('nonactive')
    inputName.value = ""
    inputPrice.value = ""
    valueNothing.value = 0
    deletewrapperbox.style.display = 'none'
})


cancelnew.addEventListener('click', () => {
    newtransaction.classList.add('nonactive')
    newtransaction.classList.remove('active')
})


deletealltransaction.addEventListener('click', () => {
    deletebox.classList.add('activedelete')
    deletewrapperbox.style.display = 'block'
    deletewrapperboxtask.append(profitbox)
    deletewrapperboxtask.append(expensebox)


})

btntwo.addEventListener('click', () => {
    deletebox.classList.remove('activedelete')
    firstboxlisttransactions.append(profitbox)
    secondboxlisttransactions.append(expensebox)
})

btnone.addEventListener('click', () => {
    deletebox.classList.remove('activedelete')
    profitbox.textContent = ''
    expensebox.textContent = ''
    window.setInterval(location.reload(true), 500);
})

function errorcoment() {
    if (inputName.value == "" || inputPrice.value == "" || valueNothing.value == 0) {
        error.textContent = 'you must complete the fields!'
    } else {
        newtransaction.classList.add('nonactive')
        newtransaction.classList.remove('active')
    }
}

addnew.addEventListener('click', errorcoment)

const profit = document.querySelector('.profit')
const profitbox = document.querySelector('.profitbox')
const expensebox = document.querySelector('.expensebox')

let walletTest = []



const addProfit = () => {

    if (valueNothing.value == 1) {
        const newProfit = document.createElement('div')
        newProfit.classList.add('profit')
        profitbox.append(newProfit)

        newProfit.innerHTML = `
        <div class="profit">${inputName.value}<span class="profitprice"> ${inputPrice.value}</span> zł</div> 
        `

        walletTest.push(parseFloat(inputPrice.value))
        countMyWallet(walletTest)
        console.log(profitbox)
        testowanie.push(newProfit.innerHTML)
        console.log(testowanie)
    }
}


const addExpenses = () => {

    if (valueNothing.value == 2) {
        const newExpense = document.createElement('div')
        newExpense.classList.add('expenses')
        expensebox.append(newExpense)

        newExpense.innerHTML = `
        <div class="expense">${inputName.value}<span class="expenseprice">${'-' + inputPrice.value}</span> zł</div>
        `
        walletTest.push(parseFloat(inputPrice.value * (-1)))
        countMyWallet(walletTest)
        console.log(walletTest)

    }
}

const available = document.querySelector('.available')

const countMyWallet = el => {
    const newMoney = el.reduce((a, b) => a + b)
    available.textContent = `${newMoney} zł`
}



addnew.addEventListener('click', addProfit)

addnew.addEventListener('click', addExpenses)


// kolory
const circle = document.querySelector('.circle')
const circletwo = document.querySelector('.circletwo')
const bodyBg = document.querySelector('body')

changecolorBtn = () => {
    circle.style.backgroundColor = 'black'
    circletwo.style.backgroundColor = 'white'


}

changecolorBtnTwo = () => {
    circle.style.backgroundColor = 'white'
    circletwo.style.backgroundColor = 'black'
    bodyBg.style.backgroundColor = 'white'

}

circle.addEventListener('click', changecolorBtn)
circletwo.addEventListener('click', changecolorBtnTwo)