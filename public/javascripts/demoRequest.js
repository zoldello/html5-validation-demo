{
    const queryString = window.location.href.slice(window.location.href.indexOf('?') + 1);
    const eMail = queryString.split('&')[0].toLowerCase().replace("email=", "");

    const eMailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const emailRegex = new RegExp(eMailPattern);
    const isEmail = emailRegex.test(eMail);

    if (isEmail) {
        const eMailTextInput = document.querySelector(".js-e-mail");

        eMailTextInput.value = eMail;
    }

    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneRegex = new RegExp(phonePattern);

    document.querySelector(".js-submit-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const form = document.demoRequestForm;
        const fCourseSize = form.fCourseSize.value;
        let formValid = true;

        // using == can handle both -1 and "-1". So, == is by design!
        if (fCourseSize == "-1") {
            form.fCourseSize.focus();
            document.querySelector(".js-course-size-error").classList.remove("hidden");
            formValid = false;
        }

        if (!formValid) {
            return false;
        }

        window.location = "demoConfirmation";
    });
}
