function validateForm() {
    const email = document.querySelector('#email');
    const regex = /^\w+[@]\w+[.]\w+$/;
    const cta = document.querySelector('#btn');
    const errorOne = document.querySelector('.errorOne');
    const errorTwo = document.querySelector('.errorTwo');




    cta.addEventListener('click', function (e) {
        let emailText = email.value;
        console.log(emailText);

        if (!emailText) {
            e.preventDefault();
            Object.assign(email.style);
            errorOne.style.display = 'block';
        }
        else if (regex.test(emailText)) {
            console.log(emailText);
            

        }
        else {
            e.preventDefault();
            Object.assign(email.style);
            errorTwo.style.display = 'block';

        }

    });

}
window.addEventListener('DOMContentLoaded', validateForm);
