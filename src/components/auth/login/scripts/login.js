async function sign() {

    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    let data = {
        "email": email,
        "password": password
    }

        let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.ok) {

          sessionStorage.setItem('token',response.headers.get('x-auth-token'))
            let json = await response.json();
          sessionStorage.setItem('id',json._id)
          /*sessionStorage.setItem('position',json.position)
          sessionStorage.setItem('description',json.description)
          sessionStorage.setItem('phone',json.phone)
          sessionStorage.setItem('address',json.address)
          sessionStorage.setItem('organization',json.organization)
          sessionStorage.setItem('email',json.email)*/

          return window.location.replace('../../../../dist/message.html')
        } else {
            alert('Misson failed:' + response.status);
        }

}

const form = document.getElementById("login-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    sign();
});
