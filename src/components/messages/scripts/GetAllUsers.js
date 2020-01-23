export function getAllUser() {
    let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/all',{
        method: 'GET',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU',
        }
    })
    const formatedResponce = await response.json();
    return formatedResponce;
}