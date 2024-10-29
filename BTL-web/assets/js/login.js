    function showRegisterPage(){
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.register-container').style.display = 'block';
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.register-container').style.display = 'none';
    });

    document.querySelector('.back-icon').addEventListener('click', function() {
        document.querySelector('.register-container').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    });
    function updatePhoneNumber() {
        const phoneInput = document.getElementById('phone');
        const displayPhoneNumber = document.getElementById('display-phone-number');
        displayPhoneNumber.textContent = phoneInput.value;
    }