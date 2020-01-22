export async function startThread() {
    let data = {
        'user': {
            '_id': document.getElementById('user-id-conv').value
        }
    }
    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads",{
        method: 'POST',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1NzkyMDgxMDV9.E2tbeqNouga3wpAP57sFa3i22awA6rUS4mHF2qxscuU',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
export async function getAllMessage() {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/5e2172442ad3c40022987be2',{
        method: 'GET',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1NzkyMDgxMDV9.E2tbeqNouga3wpAP57sFa3i22awA6rUS4mHF2qxscuU',
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}







