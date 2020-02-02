import {HTMLRender} from "../messages/scripts/HtmlRender";
import "./schedule.css"
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
let logoBlock = HTMLRender.render({
    tags: 'div',
    className: ['logo']
});
let logoLabe = HTMLRender.render({
    tags: 'img',
    title: 'src',
    value: '../dist/logo.png'
});
let userBarMenu = HTMLRender.render({
    tags: 'div',
    className: ['user-bar-menu']
})

logoBlock.append(logoLabe)
userBarBlock.append(logoBlock)
userBarMenu.append(userBarButton);
userBarMenu.append(userBarSearch)
userBarMenu.append(userBarBell)
userBarBlock.append(userBarMenu)
document.body.append(userBarBlock);

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
    title: 'id',
    value: 'message-icon'
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
//////////////////////////////////////
let table = HTMLRender.render({
    tags: 'table',
    title: 'id',
    value: 'table-id'
})
let thead = HTMLRender.render({
    tags: 'thead',
})
let theadTR = HTMLRender.render({
    tags: 'tr'
})
let Campaing = HTMLRender.render({
    tags: 'th',
    text: 'Campaing'
})
let Time = HTMLRender.render({
    tags: 'th',
    text: 'Time'
})
let Views = HTMLRender.render({
    tags: 'th',
    text: 'Views'
})
let Visitors = HTMLRender.render({
    tags: 'th',
    text: 'Visitors'
})
let CTR = HTMLRender.render({
    tags: 'th',
    text: 'CTR'
})
let CPC = HTMLRender.render({
    tags: 'th',
    text: 'CPC'
})
let CPV = HTMLRender.render({
    tags: 'th',
    text: 'CPV'
})
let CPM = HTMLRender.render({
    tags: 'th',
    text: 'CPM'
})
let Status = HTMLRender.render({
    tags: 'th',
    text: 'Status'
})
let tr1 = HTMLRender.render({
    tags: 'tr'
})
let td11 = HTMLRender.render({
    tags: 'td',
    text: 'Lorem ipsum dolor sit amet tetur' +
        'caecat cupidatat non proident, sunt in culpa qui'
})
let td12 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td12 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td13 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td14 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td15 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td16 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td17 = HTMLRender.render({
    tags: 'td',
    text:''
})
let td18 = HTMLRender.render({
    tags: 'td',
    text:''
})


theadTR.append(Campaing)
theadTR.append(Time)
theadTR.append(Views)
theadTR.append(Visitors)
theadTR.append(CTR)
theadTR.append(CPC)
theadTR.append(CPV)
theadTR.append(CPM)
theadTR.append(Status)
tr1.append(td11)
tr1.append(td12)
tr1.append(td13)
tr1.append(td14)
tr1.append(td15)
tr1.append(td16)
tr1.append(td17)
tr1.append(td18)
tr1.append(td19)
thead.append(theadTR)
table.append(thead)
document.body.append(table)
