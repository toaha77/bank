// step-1: add event listener 
document.getElementById('btn-deposit').addEventListener('click', function() {
    // step-2: get the deposit amount from the deposit input field\
    // step-3: for input field use value to the value inside the input field
    let depositField = document.getElementById('user-deposit')
    let newDepositAmountString = depositField.value
    let newDepositAmount = parseFloat(newDepositAmountString)
//    step-4: get the deposit total 
depositField.value = ''
if (isNaN(newDepositAmount)) {
    alert("Please provide a valid number")
    return
}
//    for balance
    let depositTotalElement = document.getElementById('deposit-total')
    let previousDepositTotalString = depositTotalElement.innerText
    let previousDepositTotal = parseFloat(previousDepositTotalString)

    // step-5: add numbers to set the total deposit
    let currentDepositTotal = previousDepositTotal + newDepositAmount
    //   set the deposit total
    depositTotalElement.innerText = currentDepositTotal
    
    // step-6: balance total
    let balanceTotalElement = document.getElementById('balance-total')
    let previousBalanceTotalString = balanceTotalElement.innerText
    let previousBalanceTotal = parseFloat(previousBalanceTotalString) 
    // step-7: calculate total balance

    let currentBalanceTotal = previousBalanceTotal + newDepositAmount
//   set the balance total
    balanceTotalElement.innerText = currentBalanceTotal


    // step -7 : empty string
    depositField.value = ''
    
})