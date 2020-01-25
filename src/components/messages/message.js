import {HTMLRender} from "./scripts/HtmlRender";
import "./message.css";
import '../../assets/images/logo.png';
import "../../assets/images/user.png";
import {sendMessage} from "./scripts/api-message";
import {getAllMessage, startThread} from "./scripts/thread-post";
import {getAllUsersById} from "./scripts/getAllUserById";
import {RetrieveAllThreads} from "./scripts/RetrieveAllThreads";
import {getAllUser} from "./scripts/GetAllUsers";

////////////////USER-BAR/////////////////
let userBarBlock = HTMLRender.render({
    tags: 'div',
    className: ['user-bar']
});
let userBarButton = HTMLRender.render({
    tags: 'a',
    className: ['user-bar__button'],
    text: 'Add'
});
let userBarSearch = HTMLRender.render({
    tags: 'i',
    className: ['fas', 'fa-search', 'user-bar__icon']
})
let userBarBell = HTMLRender.render ({
    tags: 'i',
    className: ['far','fa-bell','user-bar__icon']
})

    userBarBlock.append(userBarButton);
    userBarBlock.append(userBarSearch)
    userBarBlock.append(userBarBell)
    document.body.append(userBarBlock);
//////////////////////LOGO//////////////////
let logoBlock = HTMLRender.render({
    tags: 'div',
    className: ['logo']
});
let logoLabe = HTMLRender.render({
    tags: 'img',
    title: 'src',
    value: '../dist/logo.png'
});
    logoBlock.append(logoLabe)
    document.body.append(logoBlock)
////////////////////NAV///////////////////////
    let navBlock = HTMLRender.render({
    tags: 'div',
    className: ['nav'],
    });
    let navButtons = HTMLRender.render({
        tags: 'div',
        className: ['nav-bar'],
    });
    let homeIcon =  HTMLRender.render({
        tags: 'i',
        className: ['fas','fa-home','nav-bar__icon' ],
    });
    let burgerIcon =  HTMLRender.render({
        tags: 'i',
        className: ['fas','fa-bars','nav-bar__icon'],
    });
    let arrowIcon =  HTMLRender.render({
        tags: 'i',
        className: ['fas','fa-chart-line','nav-bar__icon'],
    });
    let messageIcon =  HTMLRender.render({
        tags: 'i',
        className: ['fas','fa-envelope','nav-bar__icon'],
    });
    let peopleIcon =  HTMLRender.render({
        tags: 'i',
        className: ['fas','fa-user-friends','nav-bar__icon'],
    });

    navButtons.append(homeIcon)
    navButtons.append(burgerIcon)
    navButtons.append(arrowIcon)
    navButtons.append(messageIcon)
    navButtons.append(peopleIcon)
    navBlock.append(navButtons)
    document.body.append(navBlock)
//////////////////////USER-BAR-Menu//////////////////////////
    let menuBlock = HTMLRender.render({
        tags: 'div',
        className: ['block-nav-messanger'],
    });
    let downloadIcon = HTMLRender.render({
        tags: 'i',
        className: ['far','fa-caret-square-down','block-nav-messanger__icon'],
    });
    let telegIcon = HTMLRender.render({
        tags: 'i',
        className: ['fab','fa-telegram-plane','block-nav-messanger__icon'],
    });
    let trashIcon = HTMLRender.render({
        tags: 'i',
        className: ['fas','fa-trash','block-nav-messanger__icon'],
    });
let textdownIcon = HTMLRender.render({
    tags: 'span',
    className: ['block-nav-messanger__text'],
    text: 'Inbox (2)'
});
let texttelegIcon = HTMLRender.render({
    tags: 'span',
    className: ['block-nav-messanger__text'],
    text: 'Sent'
});
let texttrashIcon = HTMLRender.render({
    tags: 'span',
    className: ['block-nav-messanger__text'],
    text: 'Trash'
});
let textWithSelect = HTMLRender.render({
    tags: 'span',
    className: ['box-select'],
    text: 'Filter messages:'
});
let blockOfIcon =  HTMLRender.render({
    tags: 'div',
    className: ['block-select--pdt-15px'],
});
let select = HTMLRender.render({
    tags: 'select',
    className: ['box-select__select'],
});
let option = HTMLRender.render({
    tags: 'option',
    text: 'Date'
});

    downloadIcon.append(textdownIcon)
    telegIcon.append(texttelegIcon)
    trashIcon.append(texttrashIcon)
    blockOfIcon.append(downloadIcon)
    blockOfIcon.append(telegIcon)
    blockOfIcon.append(trashIcon)
    menuBlock.append(textWithSelect)
    menuBlock.append(blockOfIcon)
    select.append(option)
    textWithSelect.append(select)
    document.body.append(menuBlock)

//////////////////////USER-PROFILE/////////////////////
    let userProfBLock = HTMLRender.render({
        tags: 'div',
        className: ['block-info']
    });
    let personBlock = HTMLRender.render({
        tags: 'div',
        className: ['box-person']
    });
    let img = HTMLRender.render({
        tags: 'img',
        className: ['box-person__img'],
        title: 'src',
        value: '../dist/user.png'
    })
    let name = HTMLRender.render({
        tags: 'div',
        className: ['box-person__name'],
        text: 'Lyall Roach'
    });
    let position = HTMLRender.render({
        tags: 'div',
        className: ['box-person__post'],
        text: 'UX/UI designer'
    });
let info = HTMLRender.render({
    tags: 'div',
    className: ['box-person__info'],
    text: 'Lorem ipsum dolor ' +
        'sit amet, ' + 'consectetur adipiscing elit,' +
        ' sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua.'
});
    let infoBlock  = HTMLRender.render({
        tags: 'div',
        className: ['box-info'],
    });

let nemail = HTMLRender.render({
    tags: 'div',
    className: ['box-info__title'],
    text: 'Email'
});
let email = HTMLRender.render({
    tags: 'div',
    className: ['box-info__evidence'],
    text: 'user@gmail.com'
});

let nphone = HTMLRender.render({
    tags: 'div',
    className: ['box-info__title'],
    text: 'Phone'
});
let phone = HTMLRender.render({
    tags: 'div',
    className: ['box-info__evidence'],
    text: '+12 345 678 900'
});
let nadress = HTMLRender.render({
    tags: 'div',
    className: ['box-info__title'],
    text: 'Adress'
});
let adress = HTMLRender.render({
    tags: 'div',
    className: ['box-info__evidence'],
    text: '65 Lorem St, Warsaw, PL'
});
let norgan = HTMLRender.render({
    tags: 'div',
    className: ['box-info__title'],
    text: 'Organization'
})
let organ = HTMLRender.render({
    tags: 'div',
    className: ['box-info__evidence'],
    text: 'Symu.co'
});

    personBlock.append(img)
    personBlock.append(name)
    personBlock.append(position)
    personBlock.append(info)

    infoBlock.append(nemail)
    infoBlock.append(email)
    infoBlock.append(nphone)
    infoBlock.append(phone)
    infoBlock.append(nadress)
    infoBlock.append(adress)
    infoBlock.append(norgan)
    infoBlock.append(organ)

    userProfBLock.append(personBlock)
    userProfBLock.append(infoBlock)
    document.body.append(userProfBLock)
//////////////////////CONVERSATION/////////////////////////////////
let conversation = HTMLRender.render({
    tags: 'div',
    className: ['wrapper__block-conversation']
})
let blockConvers = HTMLRender.render({
    tags: 'div',
    className: ['block-conversation']
})

let box1Convers = HTMLRender.render({
    tags: 'div',
    className: ['box-conversation']
})
let box2Convers = HTMLRender.render({
    tags: 'div',
    className: ['box-conversation']
})
let box3Convers = HTMLRender.render({
    tags: 'div',
    className: ['box-conversation']
})
let box4Convers = HTMLRender.render({
    tags: 'div',
    className: ['box-conversation']
})
let box5NevConv = HTMLRender.render({
    tags:'div',
    className: ['box-newconversation']
})
let newConvInput = HTMLRender.render({
    tags: 'input',
    className: ['friendly-user-id'],
    title: 'id',
    value: 'user-id-conv',
    title2: 'placeholder',
    value2: 'Write user id'
})
let convers1UserImg = HTMLRender.render({
    tags: 'img',
    className: ['box-conversation__image'],
    title: 'src',
    value: '../dist/user.png'
})
let convers2UserImg = HTMLRender.render({
    tags: 'img',
    className: ['box-conversation__image'],
    title: 'src',
    value: '../dist/user.png'
})
let convers3UserImg = HTMLRender.render({
    tags: 'img',
    className: ['box-conversation__image'],
    title: 'src',
    value: '../dist/user.png'
})
let convers4UserImg = HTMLRender.render({
    tags: 'img',
    className: ['box-conversation__image'],
    title: 'src',
    value: '../dist/user.png'
})
let convers1UserName = HTMLRender.render({
    tags: 'span',
    className: ['box-conversation__name'],
    text: 'Michelle Stewart'
})
let convers2UserName = HTMLRender.render({
    tags: 'span',
    className: ['box-conversation__name'],
    text: 'Michelle Stewart'

})

let convers3UserName = HTMLRender.render({
    tags: 'span',
    className: ['box-conversation__name'],
    text: 'Michelle Stewart'
})

let convers4UserName = HTMLRender.render({
    tags: 'span',
    className: ['box-conversation__name'],
    text: 'Michelle Stewart'
})

let convers1Time = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__time'],
    text: '8 April'
})
let convers2Time = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__time'],
    text: '8 April'
})
let convers3Time = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__time'],
    text: '8 April'
})
let convers4Time = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__time'],
    text: '8 April'
})
let convers1Messag = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__message'],
    text: 'Lorem ipsum dolor ' +
        'sit amet, ' + 'consectetur adipiscing elit,' +
        ' sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua.'
})
let convers2Messag = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__message'],
    text: 'Lorem ipsum dolor ' +
        'sit amet, ' + 'consectetur adipiscing elit,' +
        ' sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua.'
})
let convers3Messag = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__message'],
    text: 'Lorem ipsum dolor ' +
        'sit amet, ' + 'consectetur adipiscing elit,' +
        ' sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua.'
})
let convers4Messag = HTMLRender.render({
    tags:'span',
    className: ['box-conversation__message'],
    text: 'Lorem ipsum dolor ' +
        'sit amet, ' + 'consectetur adipiscing elit,' +
        ' sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua.'
})
let conversButton = HTMLRender.render({
    tags:'button',
    className: ['box-newconversation__button'],
    text: 'New coversation',
    title: 'id',
    value: 'new-conversation',
    title2: 'type',
    value2: 'submit'
})


    box5NevConv.append(newConvInput)
    box5NevConv.append(conversButton)
    blockConvers.append(box5NevConv)

    conversation.append(blockConvers)
    document.body.append(conversation)

let messageBlock = HTMLRender.render( {
    tags: 'div',
    className: ['block-message']
})
let messageInput = HTMLRender.render({
    tags: 'div',
    className: ['box-message']
})
let messageAll = HTMLRender.render({
    tags: 'div',
    className: ['box-all-message'],
    title: 'id',
    value: 'message-body-id'
})
let userBodyMessage = HTMLRender.render({
    tags: 'div',
    className: ['user-message'],
    title: 'id',
    value: 'users-message'
})
let timeMessage = HTMLRender.render({
    tags: 'span',
    className: ['box-message__time-message']
})
let messageForm = HTMLRender.render({
    tags: 'form',
    title2: 'action',
    value2: 'main.js',
    title3: 'id',
    value3: 'mess',
})
let messageInputBody = HTMLRender.render({
    tags: 'input',
    className: ['box-conversation__input-message'],
    title: 'type',
    value: 'text',
    title2: 'placeholder',
    value2: 'Write your message',
    title3: 'id',
    value3: 'bodyMessage'
})
let messageInputButton = HTMLRender.render({
    tags: 'input',
    title: 'type',
    value: 'submit',
    className: ['box-conversation__button'],
    title2: 'value',
    value2: 'Send'
})

messageForm.append(messageInputBody)
messageForm.append(messageInputButton)
messageInput.append(messageForm)
messageAll.append(userBodyMessage)
messageAll.append(timeMessage)
messageBlock.append(messageAll)
messageBlock.append(messageForm)
document.body.append(messageBlock)
let id = '5e2172442ad3c40022987be2';
RetrieveAllThreads(sessionStorage.getItem('token'));
const form = document.getElementById("mess");
form.addEventListener("submit", function(event) {
    debugger;
    event.preventDefault();
    sendMessage(id,sessionStorage.getItem('token'));
});
const idToStartConv = document.getElementById("new-conversation");
idToStartConv.addEventListener("click", function(f) {
    f.preventDefault();
    startThread(sessionStorage.getItem('token'));
});
setInterval(() => {
    getAllMessage(id,sessionStorage.getItem('token'))
        .then(res => {
            while (userBodyMessage.firstChild){
                userBodyMessage.firstChild.remove()
            }
            res.forEach(msg => {
             let message = HTMLRender.render({
                    tags: 'div',
                    text: msg.body,
                    className: ['user-message__body-message']
                })
                userBodyMessage.append(message)
            })
        })
},1000)
RetrieveAllThreads(sessionStorage.getItem('token'))
        .then(res => {
            res.forEach(async (thread) => {
                console.log(thread.users)
                let boxConvers = HTMLRender.render({
                    tags: 'div',
                    className: ['box-conversation'],
                    title: 'data-id',
                    value: thread._id
                })
                let avatar = HTMLRender.render({
                    tags: 'img',
                    className: ['box-conversation__image'],
                    title: 'src',
                    value: '../dist/user.png'
                })
                let conversUserName = HTMLRender.render({
                    tags: 'span',
                    className: ['box-conversation__name'],
                    text: thread.users[1].name,
                })
                let conversMessag = HTMLRender.render({
                    tags:'span',
                    className: ['box-conversation__message'],
                    text: !!thread.message ? thread.message.body:'',
                })
                let br = HTMLRender.render({
                    tags: 'br',
                })

                boxConvers.append(avatar)
                boxConvers.append(conversUserName)
                boxConvers.append(br)
                boxConvers.append(conversMessag)
                blockConvers.append(boxConvers)
            })
        })
blockConvers.addEventListener("click", function(e) {
    if (e.target.classList.contains('box-conversation'))
    id = e.target.dataset.id;
});

/*
function createLogo(){
    let block = document.createElement('div');
    let text = document.createElement('span');
    block.setAttribute('class','wrapper');
    text.setAttribute('class',"logo");
    text.textContent = "V/IRTUS";
    block.append(text);
    document.body.append(block)
}
createLogo()*/

/*function createUserBar() {
 let block = document.createElement('div');
 let button = document.createElement('a');
 let searchIcon = document.createElement('i');
 let bellIcon = document.createElement('i');
 block.classList.add('user-bar');
 button.classList.add('user-bar__button');
 searchIcon.classList.add('fas','fa-search','icon-bar');
 bellIcon.classList.add('far','fa-bell','icon-bar');
 button.textContent = 'Add';
 block.append(button);
 block.append(searchIcon);
 block.append(bellIcon);
 document.body.append(block)
}
createUserBar()*/
/*function navigationSideBar() {
    let block = document.createElement('div');
    let nav = document.createElement('nav');
    let homeIcon = document.createElement('i');
    let burgerIcon = document.createElement('i');
    let arrowIcon = document.createElement('i');
    let messageIcon = document.createElement('i');
    let peopleIcon = document.createElement('i');

    nav.classList.add('wrapper-nav');
    block.classList.add('nav-bar')
    homeIcon.classList.add('fas','fa-home','nav-icon' );
    burgerIcon.classList.add('fas','fa-bars','nav-icon')
    arrowIcon.classList.add('fas','fa-chart-line','nav-icon')
    messageIcon.classList.add('fas','fa-envelope','nav-icon')
    peopleIcon.classList.add('fas','fa-user-friends','nav-icon')
    block.append(homeIcon)
    block.append(burgerIcon)
    block.append(arrowIcon)
    block.append(messageIcon)
    block.append(peopleIcon)
    nav.append(block)
    document.body.append(nav)
}
navigationSideBar()*/
/*function userBarMenu() {
    let block = document.createElement('div')
    let downloadIcon = document.createElement('i')
    let telegIcon = document.createElement('i')
    let trashIcon = document.createElement('i')
    let textdownIcon = document.createElement('span')
    let texttelegIcon = document.createElement('span')
    let texttrashIcon = document.createElement('span')
    let textWithSelect = document.createElement('span')
    let blockOfIcon = document.createElement('div')
    let select = document.createElement('select')
    let option = document.createElement('option')

    block.classList.add('userNav')
    downloadIcon.classList.add('far','fa-caret-square-down','user-nav-icon' );
    telegIcon.classList.add('fab','fa-telegram-plane','user-nav-icon' );
    trashIcon.classList.add('fas','fa-trash','user-nav-icon');
    textdownIcon.classList.add('user-nav-text')
    texttelegIcon.classList.add('user-nav-text')
    texttrashIcon.classList.add('user-nav-text')
    textWithSelect.classList.add('title-select')
    blockOfIcon.classList.add('block-icon-pd-mg')
    select.classList.add('select-style')
    textdownIcon.textContent = "Inbox (2)"
    downloadIcon.append(textdownIcon)
    texttelegIcon.textContent = "Sent"
    telegIcon.append(texttelegIcon)
    texttrashIcon.textContent = "Trash"
    textWithSelect.textContent = "Filter messages:"
    option.textContent = 'Date'
    trashIcon.append(texttrashIcon)
    blockOfIcon.append(downloadIcon)
    blockOfIcon.append(telegIcon)
    blockOfIcon.append(trashIcon)
    block.append(textWithSelect)
    block.append(blockOfIcon)
    select.append(option)
    textWithSelect.append(select)
    document.body.append(block)
}
userBarMenu()*/
/*function userFrofile() {
    let block = document.createElement('div')

    let personBlock = document.createElement('div')
    let img = document.createElement('img')
    let name = document.createElement('div')
    let position = document.createElement('div')
    let info = document.createElement('div')

    let infoBlock = document.createElement('div')
    let nemail = document.createElement('div')
    let email = document.createElement('div')
    let nphone = document.createElement('div')
    let phone = document.createElement('div')
    let nadress = document.createElement('div')
    let adress = document.createElement('div')
    let norgan = document.createElement('div')
    let organ = document.createElement('div')

    img.setAttribute('src','user.png')
    img.setAttribute('width','100')
    name.textContent = 'Lyall Roach'
    position.textContent = 'UX/UI designer'
    info.textContent= 'Lorem ipsum dolor ' +
        'sit amet, ' + 'consectetur adipiscing elit,' +
        ' sed do eiusmod tempor incididunt ut labore et' +
        ' dolore magna aliqua.'
    nemail.textContent = 'Email'
    email.textContent = 'user@gmail.com'
    nphone.textContent = 'Phone'
    phone.textContent = '+12 345 678 900'
    nadress.textContent = 'Adress'
    adress.textContent = '65 Lorem St, Warsaw, PL'
    norgan.textContent = 'Organization'
    organ.textContent = 'Symu.co'

    info.classList.add('info-style')
    nemail.classList.add('info-style')
    nphone.classList.add('info-style')
    nadress.classList.add('info-style')
    norgan.classList.add('info-style')
    email.classList.add('info-style-prot')
    phone.classList.add('info-style-prot')
    adress.classList.add('info-style-prot')
    organ.classList.add('info-style-prot')
    block.classList.add('user-info')
    img.classList.add('user-img')
    name.classList.add('user-name')
    position.classList.add('user-post')
    infoBlock.classList.add('info-block')
    personBlock.classList.add('person-block')


    personBlock.append(img)
    personBlock.append(name)
    personBlock.append(position)
    personBlock.append(info)

    infoBlock.append(nemail)
    infoBlock.append(email)
    infoBlock.append(nphone)
    infoBlock.append(phone)
    infoBlock.append(nadress)
    infoBlock.append(adress)
    infoBlock.append(norgan)
    infoBlock.append(organ)

    block.append(personBlock)
    block.append(infoBlock)
    document.body.append(block)
}
userFrofile()*/