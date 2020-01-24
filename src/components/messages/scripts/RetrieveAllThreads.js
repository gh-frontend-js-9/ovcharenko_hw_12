export async function  RetrieveAllThreads(token) {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc',{
        method: 'GET',
        headers: {
            'x-access-token': token,
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}