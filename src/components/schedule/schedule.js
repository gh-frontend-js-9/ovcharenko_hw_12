import {HTMLRender} from "../messages/scripts/HtmlRender";
import "./schedule.css"

import Tablesort from "tablesort"

/*var cleanNumber = function(i) {
        return i.replace(/[^\-?0-9.]/g, '');
    },

    compareNumber = function(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);

        a = isNaN(a) ? 0 : a;
        b = isNaN(b) ? 0 : b;

        return a - b;
    };

Tablesort.extend('number', function(item) {
    return item.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) || // Prefixed currency
        item.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) || // Suffixed currency
        item.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/); // Number
}, function(a, b) {
    a = cleanNumber(a);
    b = cleanNumber(b);

    return compareNumber(b, a);
});

Tablesort.extend('dotsep', function(item) {
    return /^(\d+\.)+\d+$/.test(item);
}, function(a, b) {
    a = a.split('.');
    b = b.split('.');

    for (var i = 0, len = a.length, ai, bi; i < len; i++) {
        ai = parseInt(a[i], 10);
        bi = parseInt(b[i], 10);

        if (ai === bi) continue;
        if (ai > bi) return -1;
        if (ai < bi) return 1;
    }

    return 0;
});
var parseDate = function(date) {
    date = date.replace(/\-/g, '/');
    date = date.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})/, '$3-$2-$1'); // format before getTime

    return new Date(date).getTime() || -1;
};

Tablesort.extend('date', function(item) {
    return (
        item.search(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\.?\,?\s*!/i) !== -1 ||
        item.search(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/) !== -1 ||
        item.search(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i) !== -1
    ) && !isNaN(parseDate(item));
}, function(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return parseDate(b) - parseDate(a);
});*/



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
let tbody = HTMLRender.render({
    tags: 'tbody'
})
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
    text: 'First company'
})

let td12 = HTMLRender.render({
    tags: 'td',
    text:'6 days'
})
let td13 = HTMLRender.render({
    tags: 'td',
    text:'358 000'
})
let td14 = HTMLRender.render({
    tags: 'td',
    text:'58 200'
})
let td15 = HTMLRender.render({
    tags: 'td',
    text:'25%'
})
let td16 = HTMLRender.render({
    tags: 'td',
    text:'$3.02'
})
let td17 = HTMLRender.render({
    tags: 'td',
    text:'$2.51'
})
let td18 = HTMLRender.render({
    tags: 'td',
    text:'$28.35'
})
let td19 = HTMLRender.render({
    tags: 'td',
    text:'Active'
})
let tr2 = HTMLRender.render({
    tags: 'tr'
})
let td21 = HTMLRender.render({
    tags: 'td',
    text: 'Second company'
})

let td22 = HTMLRender.render({
    tags: 'td',
    text:'7 hours'
})
let td23 = HTMLRender.render({
    tags: 'td',
    text:'1 200'
})
let td24 = HTMLRender.render({
    tags: 'td',
    text:'800'
})
let td25 = HTMLRender.render({
    tags: 'td',
    text:'10%'
})
let td26 = HTMLRender.render({
    tags: 'td',
    text:'$8.45'
})
let td27 = HTMLRender.render({
    tags: 'td',
    text:'$6.13'
})
let td28 = HTMLRender.render({
    tags: 'td',
    text:'$45.22'
})
let td29 = HTMLRender.render({
    tags: 'td',
    text:'Disable'
})
let tr3 = HTMLRender.render({
    tags: 'tr'
})
let td31 = HTMLRender.render({
    tags: 'td',
    text: 'Third company'
})

let td32 = HTMLRender.render({
    tags: 'td',
    text:'7 hours'
})
let td33 = HTMLRender.render({
    tags: 'td',
    text:'1 200'
})
let td34 = HTMLRender.render({
    tags: 'td',
    text:'800'
})
let td35 = HTMLRender.render({
    tags: 'td',
    text:'10%'
})
let td36 = HTMLRender.render({
    tags: 'td',
    text:'$8.45'
})
let td37 = HTMLRender.render({
    tags: 'td',
    text:'$6.13'
})
let td38 = HTMLRender.render({
    tags: 'td',
    text:'$45.22'
})
let td39 = HTMLRender.render({
    tags: 'td',
    text:'Active'
})
let tableSortScript = HTMLRender.render({
    tags: 'script',
    text: 'new Tablesort(document.getElementById(\'table-id\'));'
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
tr2.append(td21)
tr2.append(td22)
tr2.append(td23)
tr2.append(td24)
tr2.append(td25)
tr2.append(td26)
tr2.append(td27)
tr2.append(td28)
tr2.append(td29)
tr3.append(td31)
tr3.append(td32)
tr3.append(td33)
tr3.append(td34)
tr3.append(td35)
tr3.append(td36)
tr3.append(td37)
tr3.append(td38)
tr3.append(td39)
thead.append(theadTR)
table.append(thead)
tbody.append(tr1)
tbody.append(tr2)
tbody.append(tr3)
table.append(tbody)

document.body.append(table)


new Tablesort(table);
