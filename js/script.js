// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function name(params) {
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    //  step-3 : get pass
    // 3.a : set id on the html element
    // 3.b : get the element
    // 3.c : get the value
    const passField = document.getElementById('user-pass')
    const pass = passField.value

    // do not verify email password on the client side

    if (email === 'hello@gmail.com' && pass === '123123') {
        window.location.href = 'bank.html'
    }else{
        alert('Please! Enter correct password or email')
    }
})