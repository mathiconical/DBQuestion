/**
 * validating an email input
 *
 * @param   email       email value
 * @param   emailInput  email input DOM element
 * @param   emailSpan   email span DOM element
 *
 * @return  {boolean}              return true if email is valid
 */
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
        return true;
    } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');

        if (emailSpan != null) {
            emailSpan.classList.remove('text-success');
            emailSpan.classList.add('text-danger');
            emailSpan.textContent = 'Please enter a valid email address.';
        }

        return false;
    }
}

/**
 * validating a password input
 *
 * @param  password       password value
 * @param  passwordInput  DOM element of password input
 * @param  passwordSpan   DOM element of password span
 *
 * @return  {boolean}                 return true if password is valid
 */
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

        return true;
    }

    return false;
}

// add multi event listener to an element split by space
/**
 * add multi event listener to an element split by space
 *
 * @param  el  element
 * @param  s   event or events name split by space
 * @param  fn  function to be executed
 */
function addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
