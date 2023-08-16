/*
1.add event listener   
2.withdraw amount input field
2.5 convert the input into a number
3.previous withdraw total
4.calculate total withdraw amount
4.5set total withdraw amount
5.previous balance total
6.calculate new balance total
*/
document.getElementById('btn-withdraw').addEventListener("click", function() {
    // 2
    let withdrawField =  document.getElementById('user-withdraw')
    let newWithdrawAmountString = withdrawField.value
    // 2.5 convert the input into a number
    let newWithdrawAmount = parseFloat(newWithdrawAmountString)
     // 7
     withdrawField.value = ''
    if (isNaN(newWithdrawAmount)) {
        alert("Please provide a valid number")
        return
    }
    // 3
    let withdrawTotalElement = document.getElementById('withdraw-total')
    let previousWithdrawTotalString = withdrawTotalElement.innerText
    let previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    
    // 5
    let balanceTotalElement = document.getElementById('balance-total')
    let previousBalanceTotalString = balanceTotalElement.innerText
    let previousBalanceTotal = parseFloat(previousBalanceTotalString)
   
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Sigma Bank e eto taka nai ')
        return  
    }
    // 4
    let currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    // 4.5
    withdrawTotalElement.innerText = currentWithdrawTotal
    // 6
    let newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalanceTotal

})