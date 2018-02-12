// This scoping-structure replaces IIFE in ES6+ (as long as var is not used)
{
    const requestDemoBtn = document.querySelector('.js-request-demo-btn');

    requestDemoBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const email = document.querySelector('.js-request-demo-text').value.trim();

        window.location = "demoRequest?email=" + email;
    });
}
