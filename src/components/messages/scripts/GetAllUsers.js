export async function getAllUser(token) {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/all',{
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}