export async function getAllUsersById(token) {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/5e1f715122162100228d5be6',{
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}