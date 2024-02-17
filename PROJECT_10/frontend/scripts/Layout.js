(function () {

    const Layout = {


        init() {
        const url = new URL(location.href);

        const profileName = document.getElementById('profile-name');
        const secondContent = document.getElementById('secondContent');
        console.log(secondContent);

        profileName.textContent = url.searchParams.get('name');







            const  that = this;
            // secondContent.innerHTML = that.mainList;
                // checkUserData();

            // this.fields.forEach(item =>{
            //     item.element = document.getElementById(item.id);
            //     console.log(item.element);
            //     item.element.click = function () {
            //         that.additionElement.call(that, item, this);
            //     }
            // });


        },
       //  additionElement = function (field, element) {
       //
       // }

    };

    Layout.init();
})();