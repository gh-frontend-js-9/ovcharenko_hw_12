import {HTMLRender} from "./HtmlRender";
const api = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages';
   export async function sendMessage() {
        let messageBody = document.getElementById('bodyMessage').value;
        let message = {
            "thread": {
                "_id": "5e2172442ad3c40022987be2"
            },
            "message": {
                "body": messageBody
            }
        }
        let html = document.getElementById('users-message')
        let createdMessage = HTMLRender.render({
            tags: 'div',
            text: message.message.body,
            className: ['user-message__body-message']
        })
        document.getElementById('bodyMessage').value ='';
        html.append(createdMessage)
        console.log(message)
        const options = {
            method: 'POST',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1NzkyMDgxMDV9.E2tbeqNouga3wpAP57sFa3i22awA6rUS4mHF2qxscuU',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        };
        let response = await fetch(api, options);
        const json = await response.json();
    }




