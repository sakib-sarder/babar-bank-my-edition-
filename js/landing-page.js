document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const inputEmailField = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const inputPasswordField = userPassword.value;
    console.log(inputEmailField, inputPasswordField);

    if (inputEmailField === 'sakib@babar-bank.com' && inputPasswordField === 'helloWorld') {
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Oi beta email & password thik moto de')
    }
})