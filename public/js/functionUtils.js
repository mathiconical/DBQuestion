// Example for validating an email input
function validateEmail(email, emailInput, emailSpan = null) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(emailRegex)) {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');

        if (emailSpan != null) {
            emailSpan.classList.remove('text-danger');
            emailSpan.classList.add('text-success');
            emailSpan.textContent = 'Email is valid.';
        }
    } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');

        if (emailSpan != null) {
            emailSpan.classList.remove('text-success');
            emailSpan.classList.add('text-danger');
            emailSpan.textContent = 'Please enter a valid email address.';
        }
    }
}

// Example for validating a password input
function validatePassword(password, passwordInput, passwordSpan = null) {
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const filterObj = {
        'passwordHaveAtLeastOneNumber': { regex: /.*\d.*/, message: 'Password must have at least one number.' },
        'passwordHaveAtLeastOneSmallLetter': { regex: /.*[a-z].*/, message: 'Password must have at least one lowercase letter.' },
        'passwordHaveAtLeastEightCharacters': { regex: /.{8,}/, message: 'Password must have at least eight characters.' },
        'passwordHaveAtLeastOneSpecialCharacter': { regex: /.*[!@#$%^&*].*/, message: 'Password must have at least one special character.' },
        'passwordHaveAtLeastOneCapitalLetter': { regex: /.*[A-Z].*/, message: 'Password must have at least one capital letter.' },
    };

    let isValid = true;

    for (const rule in filterObj) {
        if (!password.match(filterObj[rule].regex)) {
            isValid = false;
            passwordInput.classList.remove('is-valid');
            passwordInput.classList.add('is-invalid');

            console.log(filterObj[rule].message);

            if (passwordSpan != null) {
                passwordSpan.classList.remove('text-success');
                passwordSpan.classList.add('text-danger');
                passwordSpan.textContent = filterObj[rule].message;
            }
        }
    }

    if (isValid) {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');

        if (passwordSpan != null) {
            passwordSpan.classList.remove('text-danger');
            passwordSpan.classList.add('text-success');
            passwordSpan.textContent = 'Password is valid.';
        }
    }

}

// add multi event listener to an element split by space
/**
 * add multi event listener to an element split by space
 *
 * @param   {[type]}  el  element
 * @param   {[type]}  s   event or events name split by space
 * @param   {[type]}  fn  function to be executed
 */
function addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}
