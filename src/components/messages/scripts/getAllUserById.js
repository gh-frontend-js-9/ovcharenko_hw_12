export async function getAllUsersById(token, id) {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/`${id}`',{
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}