async function sign() {

    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let data = {
        "email": email,
        "password": password,
        "name": name
    }
    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
const form = document.getElementById("signup-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    sign();
});
