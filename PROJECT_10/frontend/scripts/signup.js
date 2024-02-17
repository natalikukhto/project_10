(function () {

    const Signup = {
        processElement: null,

        fields: [
            {
                name: 'name',
                id: 'name',
                element: null,
                regex: /^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/,
                valid: false,
            },
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
            {
                name: 'password',
                id: 'password-repeat',
                element: null,
                regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                matchWith: "password",
                valid: false,
            }
        ],
        init() {
            const that = this;
            this.fields.forEach(item => {
                item.element = document.getElementById(item.id);
                item.element.onchange = function () {
                    that.validateField.call(that, item, this)
                }
            });

            this.processElement = document.getElementById('process');
            this.processElement.onclick = function () {
                that.processForm();
            };
        },


        validateField(field, element) {
            if (!element.value || !element.value.match(field.regex)) {
                element.style.borderColor = 'red';
                field.valid = false;
            } else {
                element.removeAttribute('style');
                field.valid = true;
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
            const isValid = this.fields.every(item => item.valid);
            if (isValid) {
                this.processElement.removeAttribute('disabled');

            } else {
                this.processElement.setAttribute('disabled', 'disabled');
            }
            return isValid;

        },

        processForm() {

            if (this.validateForm()) {
                const name = document.getElementById('name');
                let userObj = {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                };

                let clientsArray = JSON.parse(localStorage.getItem('clientsArray')) || [];

                if (clientsArray === []) {
                    clientsArray.push(userObj);
                    localStorage.setItem('clientsArray', JSON.stringify(clientsArray));

                }

                if (clientsArray !== []) {
                    for (let i = 0; i < clientsArray.length; i++) {
                        if (JSON.stringify(clientsArray[i]) === JSON.stringify(userObj)) {
                            let paramString = '';
                            this.fields.forEach(item => {
                                paramString += (!paramString ? '?' : '&') + item.name + '=' + item.element.value;
                            });
                            location.href = 'Layout.html' + paramString;
                            return;
                        }
                    }

                    clientsArray.push(userObj);
                    localStorage.setItem('clientsArray', JSON.stringify(clientsArray));

                }

                let paramString = '';
                this.fields.forEach(item => {
                    paramString += (!paramString ? '?' : '&') + item.name + '=' + item.element.value;
                });


                location.href = 'Layout.html' + paramString;

            }

        },

    };
    Signup.init();
})();