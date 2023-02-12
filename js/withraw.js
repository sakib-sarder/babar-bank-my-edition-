document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withrawInputElement = document.getElementById('withraw-input')
    const withdrawInputValue = parseFloat(withrawInputElement.value);
    
    withrawInputElement.value = '';
    if (isNaN(withdrawInputValue)) {
        alert('Please Provide a valid Number');
        return;
    }

    const withdrawInitialElement = document.getElementById('withraw-initial');
    const withdrawInitialValue = parseFloat(withdrawInitialElement.innerText);
    let currentWithdraw = withdrawInputValue + withdrawInitialValue;
    withdrawInitialElement.innerText = currentWithdraw;

    const totalBlanceElement = document.getElementById('total-blance');
    const totalBlance = parseFloat(totalBlanceElement.innerText);
    totalBlanceElement.innerText = totalBlance - currentWithdraw;
})