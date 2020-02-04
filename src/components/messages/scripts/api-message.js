import {HTMLRender} from "./HtmlRender";
const api = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages';
   export async function sendMessage(id, token) {
        let messageBody = document.getElementById('bodyMessage').value;
        let message = {
            "thread": {
                "_id": id
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
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        };
        let response = await fetch(api, options);
        const json = await response.json();
    }




