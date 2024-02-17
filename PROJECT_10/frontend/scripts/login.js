(function () {

    const Login = {
        flexCheckDisabled: null,
        processElement: null,
        fields: [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                valid: false,
            },
        ],

        init() {
            const that = this;
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                item.element.onchange = function () {
                    that.validateField.call(that, item, this)
                }
            });
            this.flexCheckDisabled = document.getElementById('flexCheckDisabled');
            this.flexCheckDisabled.onchange = function () {
                that.validateForm();
            };


            this.processElement = document.getElementById('process');
            this.processElement.onclick = function () {
                that.processForm();

            };
        },
        validateField(field, element) {
            if (!element.value || !element.value.match(field.regex)) {
                console.log(element.value);
                element.style.borderColor = 'red';
                field.valid = false;
            } else {
                element.removeAttribute('style');
                field.valid = true;
                console.log(element.value);
            }
            if (field.matchWith) {
                const password = this.fields.find(item => item.name === field.matchWith).element;
                if (password.value !== element.value) {
                    element.style.borderColor = 'red';
                    field.valid = false;
                } else {
                    element.removeAttribute('style');
                    field.valid = true;
                }
            }

            this.validateForm();
        },


        validateForm() {
            const validForm = this.fields.every(item => item.valid);
            const isValid = this.flexCheckDisabled.checked && validForm;
            if (isValid) {
                this.processElement.removeAttribute('disabled');

            } else {
                this.processElement.setAttribute('disabled', 'disabled');
            }
            return isValid;

        },

        processForm() {
            if (this.validateForm()) {
                const email = document.getElementById('email');
                const password = document.getElementById('password');

                let getClientsArray = JSON.parse(localStorage.getItem('clientsArray')) || [];

                let user = null;

                for (let i = 0; i < getClientsArray.length; i++) {


                    if (getClientsArray[i].email === email.value) {
                        user = getClientsArray[i];
                        break;
                    }
                }

                let errors = document.querySelectorAll('.error');
                for (let i = 0; i < errors.length; i++) {
                    errors[i].remove();
                }


                if (!user) {
                    let error = document.createElement('div');
                    error.className = 'error';
                    error.style.color = 'red';
                    error.textContent = 'Такого пользователя нет';
                    email.after(error);
                    field.valid = true;
                    return;
                }

                if (user.password !== password.value) {
                    errors.textContent = '';
                    let error = document.createElement('div');
                    error.className = 'error';
                    error.style.color = 'red';
                    error.innerHTML = 'Неверный пароль';
                    password.after(error);
                    field.valid = true;
                    return;
                }

                let paramString = '';

                paramString += '?' + 'name' + '=' + user.name + '&' + 'email' + '=' + user.email + '&' + 'password' + '=' + user.password;

                location.href = 'Layout.html' + paramString;

            }

        },

    };
    Login.init();
})();