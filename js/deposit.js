document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositInputValueString = depositInput.value;
    const depositInputValue = parseFloat(depositInputValueString); 
    depositInput.value = '';
    if (isNaN(depositInputValue)) {
        alert('Please Provide Valid Number')
        return;
    }
    
    let depositInitialValueElement = document.getElementById('deposite-initial');
    const depositInitialValue = parseFloat(depositInitialValueElement.innerText);
    
    let currentDeposit = depositInputValue + depositInitialValue;
    depositInitialValueElement.innerText = currentDeposit;
    
    let totalBlanceElement = document.getElementById('total-blance');
    const totalBlance = parseFloat(totalBlanceElement.innerText);
    totalBlanceElement.innerText = currentDeposit + totalBlance;
    
})