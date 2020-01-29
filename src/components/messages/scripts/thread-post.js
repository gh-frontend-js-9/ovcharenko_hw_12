export async function startThread(token) {

    let data = {
        'user': {
            '_id': prompt('Please enter user id', '')   //document.getElementById('user-id-conv').value
        }
    }
    let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads",{
        method: 'POST',
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
export async function getAllMessage(id, token) {
    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${id}`,{
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}







